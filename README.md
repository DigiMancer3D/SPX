# SPX – Super-Positioned Text (SuPosXt)

**A personal, long-term experimental text encoding and compression system**

SPX is a deterministic, reversible system I built over many years for encoding and compressing text using custom pattern substitution and graph-like structures.

## What it actually does

1. Takes normal text input
2. Converts each character into a structured binary-like "graph" using a custom mapping table
3. Applies multiple layers of pattern-based compression:
   - Finds repeating low-entropy binary patterns
   - Replaces them with short symbolic tokens (using the `ray` lookup tables)
   - Runs several compression passes (`rowcomp`, `p2comp`, `wrapper`)
4. Adds parity checks and metadata for verification
5. Outputs a compact, encoded "graph-hash" that can (in theory) be decoded back to the original text

The process is fully deterministic — the same input always produces the same output.

## Current State

This is a very personal project I have worked on for over 12 years. The code is functional for encoding, but:
- Documentation has historically been very dense and used private terminology
- The decoder (`cleanhouse`) has collisions
- The code style and naming are idiosyncratic because I taught myself

I am currently working on making the code and documentation clearer for other people to understand.

## Files

- `SuPosXt.html` – Main web demo (encode/decode interface)
- `theScript.js` – Core compression and graphing logic
- `DND-Regular.otf` – Custom font used for visual output

## Note

AI was used to re-write this readme to remove the "word salad" since my communication skills are unable to relay what is going on.
