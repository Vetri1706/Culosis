# Character Portrait Enhancement Spec

## Overview

Enhance the character portrait system to display comical faces with realistic symptom-based appearance.

## Requirements

### Visual Character Features

- Comical face variations (round, square, oval, triangle, diamond)
- Silly expressions (happy, goofy, surprised, sleepy, confused)
- Exaggerated features for entertainment value

### Health-Based Appearance

- Fever: Flushed red skin with animated sweat drops
- Pale/Sick: Grayish, sickly skin tone
- Tired: Dark circles under eyes, droopy appearance
- Cough: Slightly open mouth, different expression
- Runny Nose: Red, irritated nose area

### Implementation Details

- Use consistent character generation based on name hash
- Maintain same appearance for same character name
- Apply health overlays without losing base character features
- Add floating symptom tags for clear visual indicators

## Success Criteria

- Characters look genuinely comical and engaging
- Health symptoms are immediately visually apparent
- System maintains consistency across game sessions
- Performance remains optimal with enhanced graphics

## Files to Modify

- `src/client/components/CharacterPortrait.tsx`
- Character generation logic
- CSS styling for visual effects

## Testing

- Verify all face types render correctly
- Test symptom overlays work properly
- Ensure mobile compatibility
- Check performance with multiple characters
