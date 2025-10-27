# Professional UI Redesign Spec

## Overview

Transform the home UI from overwhelming colors and emojis to a professional, government-style interface.

## Current Issues

- Too many bright colors causing visual fatigue
- Excessive emoji usage making interface look artificial
- Overwhelming difficulty selection options
- Unprofessional appearance for security theme

## Design Requirements

### Color Palette

- Primary: Slate/gray backgrounds (#1e293b, #374151)
- Accents: Subtle blue (#3b82f6), emerald (#10b981), amber (#f59e0b)
- Text: High contrast white and gray tones
- Remove: Bright reds, yellows, and rainbow gradients

### Typography

- Professional fonts: Clean sans-serif or monospace
- Clear hierarchy: Large titles, readable body text
- Government styling: "CLASSIFIED", "CHECKPOINT ALPHA"
- Remove: All emoji characters

### Layout Improvements

- Increased spacing and breathing room
- Backdrop blur effects for modern glass-morphism
- Subtle animations instead of aggressive bouncing
- Clean grid system with proper alignment

### Functionality Changes

- Remove difficulty selection from single player
- Streamline game mode selection
- Focus on core features without overwhelming options
- Professional terminology throughout

## Implementation Strategy

- Gradual color replacement maintaining visual hierarchy
- Component-by-component emoji removal
- Simplified state management for removed options
- Consistent styling across all components

## Success Criteria

- Professional appearance suitable for government theme
- Reduced visual fatigue and improved readability
- Streamlined user experience without overwhelming choices
- Maintained functionality with cleaner interface

## Files to Modify

- `src/client/App.tsx` - Main menu redesign
- `src/client/components/GameModeSelector.tsx` - Remove difficulty options
- CSS styling throughout application
- Remove unused state variables

## Testing

- Visual consistency across all screens
- Accessibility compliance with contrast ratios
- Mobile responsiveness maintained
- User experience flow validation
