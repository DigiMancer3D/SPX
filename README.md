# SuPosXt (SPX): Superposition Text Encoder & Custom Lab

[![GitHub](https://img.shields.io/badge/GitHub-DigiMancer3D/SPX-181717.svg)](https://github.com/DigiMancer3D/SPX)  
**Lab & Toolkit**: [`SPX_Public_Lab_v0.6.html`](PX_Public_Lab_v0.6.html)  
**Live Demos**: [`SuPosXt.html`](SuPosXt.html) • [`Binary Parity Check.html`](Binary%20Parity%20Check.html)  
**Status**: Alpha • Experimental • Testing Ready

<div align="center" type="markdown">
<i><b>Live, experimental deterministic encoding and detangling research lab</b></i>

<br></br></div>

> Super Positioned Text [SPX] is an untested concept for live encoding data using similarly untested methods like encoding part of the string to itself. <br></br>  Use Responsibly. <div align="center"> Please enjoy your day. <div align="right" >&nbsp; &nbsp; &nbsp; --3D &nbsp; &nbsp; &nbsp; <hr></div></div>


<br></br>


## What is SPX?

SPX (Super Positioned Text, historically known as SuPosXt) is an experimental system for transforming text into a structured **DataGraph** and then reducing that graph into an **SPX PATH** that can be detangled back to the source.

At a high level, SPX:

1. maps source characters into Node-derived shape/topology groups, on/off sets, and locator values;
2. places those values into related rail/heatmap structures;
3. records reversible relationships **between states** instead of treating every state independently;
4. maintains a live parity/history loop;
5. builds a deterministic DataGraph;
6. reduces repeated states, known patterns, heatmap/index values, and graph structure with the Reflection Wheel/SPX token grammar;
7. optionally reduces later repeated path objects using SPX-QEC live references; and
8. detangles those layers in reverse to recover the original source.

SPX uses the word *super positioned* and sometimes *faux-quantum* as a conceptual description of multiple codependent views being flattened and later reconstructed. It is a classical deterministic software process designed to *mimic a **fake state of quantum super postition***, not literal quantum computation.

---

<br></br>

## Public Lab

The current public single-file HTML lab provides:

- **Encoder / SPX Path** - build a DataGraph and compact SPX PATH.
- **Detangle** - paste a shared DataGraph, array, static form, or SPX PATH and attempt a proven inverse.
- **Live Encoding** - watch the DataGraph and token path change while typing.
- **Live Parity** - watch the 18-position parity/carry loop advance in real time.
- **SPX Boot Camp** - run a public compatibility and round-trip exercise on an SPX output.
- **Reflection Wheel** - inspect the reference ranges and run/count grammar.
- **Token Ledger / QEC Explorer** - inspect which reductions were actually committed.
- **Node / CFTT / Parity** - inspect the lower-level state machinery.
- **Tests + Audit** - run the built-in regression suite and inspect development-only audit information.
- **Whitepaper** - read the updated public working paper inside the app.
- **Contact** - project and creator links plus repair-assistance credit.

Open `SPX_Public_Lab_v0.6.html` HTML file directly in a modern browser [***2009** or newer*]. The lab is designed to work offline and does not require a server for normal use.

---

<br></br>

## Important distinction: DataGraph vs SPX PATH

The **DataGraph** is the structured intermediate representation. It is useful because the ordered sections expose the rails, parity/programming state, and locator/index material.

The **SPX PATH** is the reduced reconstruction path. It applies the Reflection Wheel and token grammar to consume information that the detangler can regenerate from shared deterministic rules. QEC runs later and may replace additional repeated live-path structures while retaining an earlier reference.

The public lab deliberately keeps verbose debugging/audit metadata out of the compact path.

---
<br></br>

## Reflection Wheel

The canonical uppercase reference is:

```text
A=1, B=2, ... Z=26
```

A contiguous range can be represented by two endpoints such as `AZ`. The default range is codec knowledge and therefore costs no transmitted characters in the default profile.

Simple binary runs are reduced first, for example:

```text
000000 -> AF
11111  -> aE
```

Generated SPX pattern families, heatmap/index tokens, graph-structure tokens, and finally QEC references operate after that initial cleanup.

---
<br></br>

## Historical compatibility fixture

The original paper's `Hello World` example remains a fixed compatibility test:

```text
L102 DataGraph
   -> L77 historical SPX static form
   -> L73 historical QEC SPX PATH
   -> Hello World
```

The fixture includes the demonstrated QEC references `1001 -> 2Bd`, `118 -> Vc`, and `101 -> Pc`.

---
<br></br>

## SPX Boot Camp

Boot Camp is a public-friendly test harness for a pasted SPX output. It can:

- classify and normalize the input;
- attempt exact detangling;
- report the recovered source when proven;
- rebuild that source with the current encoder;
- verify deterministic reproduction and source round-trip;
- check that a rebuilt compact path has consumed DataGraph section separators; and
- report SPX/QEC token activity.

Boot Camp is a **compatibility exercise, not a security certification**. An unresolved historical object can mean that the current public build does not yet implement the historical rule that created it. So, the boot camp allows you to test this.

---
<br></br>

## Current status and limits

SPX is experimental and untested as a general-purpose encoding/compression/error-correction system. It should not be treated as production cryptography or as a replacement for standardized compression, integrity, or error-correcting codes.

The current repaired research ABI is strongest for printable ASCII and for the frozen historical fixture. The project continues to recover and formalize older context-sensitive SPX behavior while keeping the decoder bounded and deterministic.

A shorter visible string is not automatically net compression. Shared LUTs and deterministic rules are shared codec knowledge, and arbitrary high-entropy input cannot always be shortened losslessly in a self-contained representation.

---
<br></br>

## Whitepaper

The updated public working paper is included as:

`SPX_Public_Whitepaper_v0.6.md`

It is also readable from the **Whitepaper** page in the HTML lab.

---
<br></br>

## Creator / Contact

**3Douglas Pihl**  
Handle: **@Z0M8I3D**  
Also known as: **DigiMancer3D**, **Radioactive3D**, **R.3D**, **3D**  
A **BitNinja** (Bi-Integral Terminal Ninja) & a **Digital Mancer** (someone knowledgeable in digital means).

- GitHub: https://github.com/DigiMancer3D
- SPX repository: https://github.com/DigiMancer3D/SPX
- SPX-QEC repository: https://github.com/DigiMancer3D/SPX-QEC
- X: https://x.com/Z0M8I3D

---
<br></br>

## Repair-assistance credit

OpenAI's **ChatGPT** assisted with the 2026 repair/reconstruction work: reviewing historical SPX material, isolating JavaScript and decoder bugs, formalizing reversible components, rebuilding the deterministic token/detangle path, writing regression tests, and helping prepare the public documentation.

SPX itself - the concept, historical implementations, terminology, Node system, Reflection Wheel, parity ideas, diagrams, and creative direction - is the work of **3Douglas Pihl / @Z0M8I3D**.

ChatGPT: https://chatgpt.com/

---
<br></br>

## Related repository

SPX-QEC: https://github.com/DigiMancer3D/SPX-QEC

The SPX-QEC project explores rule-compliant recurring patterns for use in SPX research and pattern analysis.

**Made by** 3Douglas Pihl (DigiMancer3D)  
**Original notes**: `SuPosXt_README.txt` and `SPX_v2.txt`  
**BTC**: 39ajMiohYWzzSH8E55vANhZAnwcrjBnTD7

Thank you for checking out this unusual and fun project! Star the repo or open an Issue if you have ideas : every bit of feedback helps move it forward.

---
<br></br>

## Note

- AI was used to re-write this readme to remove the "word salad" since my communication skills are unable to relay what is going on.

- AI was used to correct the deeply routed JS bugs and LUT collisions.
