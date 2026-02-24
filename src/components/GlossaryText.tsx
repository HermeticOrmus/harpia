'use client';

import { useMemo } from 'react';
import { GlossaryTerm } from './GlossaryTerm';
import { glossary, GlossaryTerm as GlossaryTermType } from '@/data/glossary';

interface GlossaryTextProps {
  children: string | undefined;
  className?: string;
}

// Build a map of all terms and aliases to their term objects
function buildTermMap(): Map<string, GlossaryTermType> {
  const map = new Map<string, GlossaryTermType>();

  glossary.forEach((term) => {
    // Add main term
    map.set(term.term.toLowerCase(), term);

    // Add aliases
    if (term.aliases) {
      term.aliases.forEach((alias) => {
        map.set(alias.toLowerCase(), term);
      });
    }
  });

  return map;
}

const termMap = buildTermMap();

// Get all searchable terms sorted by length (longer first to match "base de datos" before "base")
const allTerms = Array.from(termMap.keys()).sort((a, b) => b.length - a.length);

// Create regex pattern that matches whole words only
function createTermRegex(): RegExp {
  // Escape special regex characters and join with |
  const escaped = allTerms.map((term) =>
    term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  );

  // Match whole words only, case insensitive
  // Use word boundaries, but also handle Spanish characters
  return new RegExp(`(?<![a-záéíóúñü])(${escaped.join('|')})(?![a-záéíóúñü])`, 'gi');
}

interface TextSegment {
  type: 'text' | 'term';
  content: string;
  term?: GlossaryTermType;
}

function parseText(text: string): TextSegment[] {
  const regex = createTermRegex();
  const segments: TextSegment[] = [];
  let lastIndex = 0;
  const matchedTermIds = new Set<string>(); // Track which terms we've already matched

  let match;
  while ((match = regex.exec(text)) !== null) {
    const matchedText = match[0];
    const term = termMap.get(matchedText.toLowerCase());

    // Skip if we've already matched this term in this text (only highlight first occurrence)
    if (term && matchedTermIds.has(term.id)) {
      continue;
    }

    // Add text before the match
    if (match.index > lastIndex) {
      segments.push({
        type: 'text',
        content: text.slice(lastIndex, match.index),
      });
    }

    // Add the matched term
    if (term) {
      matchedTermIds.add(term.id);
      segments.push({
        type: 'term',
        content: matchedText,
        term,
      });
    } else {
      // Shouldn't happen, but fallback to plain text
      segments.push({
        type: 'text',
        content: matchedText,
      });
    }

    lastIndex = match.index + matchedText.length;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    segments.push({
      type: 'text',
      content: text.slice(lastIndex),
    });
  }

  return segments;
}

export function GlossaryText({ children, className }: GlossaryTextProps) {
  const segments = useMemo(() => {
    if (!children) return [];
    return parseText(children);
  }, [children]);

  if (!children) return null;

  return (
    <span className={className}>
      {segments.map((segment, index) => {
        if (segment.type === 'term' && segment.term) {
          return (
            <GlossaryTerm key={`${segment.term.id}-${index}`} term={segment.term}>
              {segment.content}
            </GlossaryTerm>
          );
        }
        return <span key={index}>{segment.content}</span>;
      })}
    </span>
  );
}
