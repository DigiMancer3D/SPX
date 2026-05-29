# SuPosXt (SPX): Superposition Text Encoder & Custom Parity Toolkit

[![GitHub](https://img.shields.io/badge/GitHub-DigiMancer3D/SPX-181717.svg)](https://github.com/DigiMancer3D/SPX)  
**Live Demos**: [`SuPosXt.html`](SuPosXt.html) • [`Binary Parity Check.html`](Binary%20Parity%20Check.html)  
**Status**: Beta • Experimental • WIP

**SuPosXt** (Superposition Text) is a completely custom, client-side JavaScript tool that encodes plain text using a unique "superposition-style" system. It splits data across multiple parallel streams, places it on an imaginary grid inspired by a special "Node" font, applies heavy custom parity/error-checking, and outputs a compact obfuscated string that can (in theory) be decoded back losslessly.

It is **not** finished production cryptography : it is a creative research prototype that combines ideas from error-correcting codes, grid-based placement, and layered data processing. The code accurately reflects an inventor exploring new ways to make fast, per-keystroke encoding with built-in redundancy.

## Brief Overview
SuPosXt works by:
- Turning text into binary + custom control "tapes".
- Building 4 parallel data channels (`r1 r2 r3 nullstop`).
- Using pattern rules to combine bits into symbols.
- Validating everything with multi-layer parity and geometric checks.
- Outputting a short encoded result plus massive debug info.

**Inspired by**: Full House character "talk" dynamics (how multiple people speak over each other and then get "detangled") + Futurama-style mathematical ordering for reconstruction.

## 1. Binary Parity Checker (Foundation : `Binary Parity Check.html`)
This standalone tester shows the powerful error-detection engine that powers the whole system.

**What it does**:
- You type → characters become binary → a core bit string (`jim`) is built with clever π/3.14 offsets for pseudo-random parity bits.
- It creates **8 different ways** of looking at the same bits (`st1`–`st8` arrays): every-other-bit, powers-of-2 skips (Hamming style), "flower" diagonals, "cross-bread" patterns.
- Counts the 1s in each view and records even/odd results (`d1`–`d8` parity bits).
- Uses XOR between views + lists of 1-bit positions (`sXpos`) to **locate exactly where errors might be** (`ad1`–`ad8` error syndromes).
- Runs higher-level combined checks: "mains", "determiner", "full", "flower", "cross-bread" (`gg1`–`gg5`).
- Validates the whole thing by turning input stats into geometric shapes (parallelogram area + sphere volume formulas) to make sure the data "fits together nicely".

This gives extremely strong redundancy before the main encoder even starts.

**Key variables explained**:
- `jim` = main processed binary string
- `st#` = sampled bit views
- `d#` / `gg#` = parity results
- `ad#` = error location detectors

## 2. SuPosXt Main Encoder (`SuPosXt.html`)
The main interactive page you type into.

**How the encoding works step-by-step**:
1. Input → split into 4 data channels (`r1`, `r2`, `r3`, `nullstop` : the "superposition" layers).
2. A control string (`newread` / `tape`) is read one digit at a time.
3. Pattern matching decides what to do:
   - `/6/` or `ABC` pattern: takes one bit from each of the three main channels, builds a triple (`t1`), stores in `build[]`, then maps the exact 3-bit combo to a symbol in the final output (`mapmap[]`). Example: "100" → `'i'`, "001" → `'j'`, "111" → `'k'`.
   - Other patterns handle pairs, repeats, or special codes (many are still placeholders).
4. Loops run (`temptemp2`, controlled by `ifout` / `tapelen`) until the whole "tape" is consumed.
5. "Detangling" phase resolves the layers (comments call these stages **Stephanie**, **Michelle**, **DJ**, **Gibblers** : internal nicknames for untangling the interwoven data streams).
6. Result is joined from `mapmap` and shown in the output area along with full debug (tape states, error counts, loop info, etc.).

The whole system is designed around placing bits on a virtual grid following "Node" font rules (start at center null box, rotate right → down → left → up, stack upward on collisions).

## 3. Planned Upgrades & Ideas Being Considered
- Two lookup tables: public base + hidden compressed token table (high-frequency patterns replaced by short 2–6 character API tokens for massive reduction).
- SHA-level wrapping + deterministic seeding for reproducibility and nested metadata.
- Full block-graph output (255-byte chunks or 45-unit subgraphs), better subgraph compounding, fluid 45-max endpoints.
- Complete error correction (beyond detection) using Futurama-inspired ordering.
- Fixes for known issues: d4 decoding bugs, input collisions, infinite loops on short strings, subgraph compounding.
- Expanded wrapped/reduced string preprocessing + nested API-directed data.

## 4. Explaining the "Madness" in the Code
The HTML files are living prototypes : full of comments, debug statements, TODOs ("FINISH ME", "Detangle Stephanie"), commented experiments, and creative internal lore. This is normal for rapid invention.

Everything is intentionally visible so the creator can see every internal state while developing. Future versions will clean this into proper modules.

## Comprehensive Terminology Table

| Strange Term / Nickname | Code Element(s)                     | Plain-English Equivalent |
|-------------------------|-------------------------------------|--------------------------|
| **Stephanie / Steph Talk** | `build[]` + detangling comments    | Main intermediate data assembly layer |
| **Michelle / michelletime** | Error tracking, `ad*` arrays, debug section | Secondary validation & error-location layer |
| **DJ / Gibblers**       | `mapmap[]` final output             | The finished encoded message string |
| **Tape / newread**      | Instruction processing string       | Control flow / "program" that tells the decoder what pattern to use next |
| **r1, r2, r3, nullstop** | Four array registers                | Parallel data channels (the "superposition" : like having 4 copies of the data in different forms) |
| **Node font / DND-Regular** | IPFS-linked OTF + grid rules     | Visual basis for how bits are placed on the imaginary grid (on/off node connections) |
| **Futurama Theorem**    | Unwrapping rotation/order logic     | Specific rules for putting everything back in the correct order |
| **Flower / Cross-Bread** | `st5`–`st8` parity groups           | Specialized bit-sampling patterns used for deeper redundancy |
| **Parallelogram + Sphere** | Trig/geometry formulas in parity tool | Mathematical "does this data fit together nicely?" validation |
| `temptemp2` / `ifout` / `tapelen` | Loop counters                   | How many times the processor steps through the data |
| `dot1de` etc.           | Debug HUD elements                  | On-screen status dashboard (errors, loops, detangle progress) |
| `/6/` pattern handler   | Big `else if` chain                 | Rule engine that decides "take one bit from each channel right now" |

This table translates the inventive internal language into standard programming concepts while staying true to what the actual code does.

## How to Use
1. Clone or download the repository.
2. Open either HTML file directly in a browser (works completely offline).
3. Type in the big input box.
4. Watch live processing and the rich debug output.
5. Press any visible buttons to trigger full passes.

## Project Status & Honest Notes
**🚧 Beta : Not Complete**

- Many features are still being built (full lossless round-trips, block output, error correction).
- Debug information and commented code are left in on purpose for development.
- Collisions and decoding failures exist on some inputs : the creator is actively fixing them.
- The system is a fascinating creative exploration of encoding ideas, not yet production-ready cryptography.

Contributions, code cleanups, mathematical review, testing, or visualizer help are all extremely welcome!

**Made by** 3Douglas Pihl (DigiMancer3D)  
**More info / original notes**: `SuPosXt_README.txt` and `SPX_v2.txt`  
**BTC**: 39ajMiohYWzzSH8E55vANhZAnwcrjBnTD7

Thank you for checking out this unusual and fun project! Star the repo or open an Issue if you have ideas : every bit of feedback helps move it toward a clean, working v1.0.

## Note

AI was used to re-write this readme to remove the "word salad" since my communication skills are unable to relay what is going on.
