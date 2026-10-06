# Super Positioned Text [SPX]
## Public Working Whitepaper - 2026 Edition

**Creator and original designer:** 3Douglas Pihl (`@Z0M8I3D`, DigiMancer3D)  
**Project:** Super Positioned Text [SPX] / SuPosXt  
**Status:** Experimental, untested research concept

> Super Positioned Text [SPX] is an untested concept for live encoding data using similarly untested methods. Please use it responsibly, and please enjoy your day. -3D

## Abstract

Super Positioned Text (SPX) is an experimental deterministic encoding and reconstruction system designed around live transformation. Instead of treating input as a single opaque stream, SPX maps input symbols into Node-derived structural descriptions, separates those descriptions into related data rails, records the relationship between neighboring states, builds parity and programming information, and combines the result into a structured intermediate called a **DataGraph**. The DataGraph can then be reduced into an **SPX PATH** using the Reflection Wheel, predefined SPX token families, structural token rules, and later SPX-QEC live references.

The project explores a "between two states" model: a later state can be represented partly by its relationship to the state before it. This is a classical deterministic process. SPX sometimes describes the idea as *faux-quantum* or *super positioned* because multiple related views are carried and later detangled, but SPX is not literal quantum computation or quantum entanglement.

The public lab is intended for experimentation, visualization, compatibility testing, and continued research. SPX is not established cryptography, a standardized error-correcting code, or a guarantee that arbitrary data will compress.

## 1. From text to Node structure

The historical SPX design begins with a Node-style symbol system. Each supported character has a structural description derived from connected positions and on/off states. A symbol therefore has more than one useful identity:

- a **group**, meaning its shape or topology family;
- a **set**, meaning its particular on/off state within that family;
- a **locator**, used when the Node identity is mapped into the SPX heatmap/grid representation.

Different topology families may legitimately contain similar sets. Inside a decoding identity, however, two different source symbols must not become indistinguishable. Historical SPX code manually adjusted locator values when collisions were discovered. The repaired research model treats locator collision checking as a deterministic compilation/audit problem while preserving the Node structure itself.

## 2. Heatmap, grid, and rails

SPX maps Node-derived information into a predictable grid/heatmap arrangement. Historical work used Centered-Null as an orientation reference and directional movement around the grid. The mapped information is then represented through related rails rather than as one undifferentiated string.

The rails are not intended to be independent messages. They are cooperating views of the same source structure. Their ordering, lengths, parity relationships, and locator tape provide constraints used during detangling.

## 3. Between-state transformation

A recurring SPX idea is to carry the first state and encode how each later state relates to the previous one. For a binary rail, the historical relationship is equivalent to:

```text
first value is carried
same as previous      -> 1
different from previous -> 0
```

The repaired lab formalizes the reversible form as a Carry-First Transition Transform (CFTT). In a general base `B`, the relation can be represented by a modular delta between the previous and current state. The transform itself is reversible; it does not magically remove information. Its purpose is to expose relations that later token systems may represent more economically.

## 4. Live parity and history

The historical parity experiment operates on an approximately 18-position working state. A full first loop accepts 18 fresh positions. When that loop closes, SPX derives an end parity/carry state. The next loop can carry that state in its first position and then accept 17 fresh positions.

This creates an important distinction:

```text
full old loop payload -> may be discarded from working memory
loop count + carried parity -> retained to continue the parity process
```

SPX therefore keeps enough lineage to continue its parity state machine without claiming that the parity value can reconstruct the discarded historical payload by itself.

The historical design also explores several parity views, including Q1-Q4, Flower, and Cross-Bread selectors. The public lab visualizes these as experimental SPX parity families rather than presenting them as a standardized Hamming-code implementation.

## 5. The DataGraph

After mapping, relational transformation, parity, and programming information have been assembled, SPX produces a structured intermediate called a **DataGraph**. Conceptually, a graph contains an ordered sequence of fields such as previous/full-stop state, detector/parity values, programming values, rails, and locator/index information.

The ordering is part of the SPX grammar. That matters because a compact SPX PATH does not need to transmit verbose field names when both encoder and detangler already know what each position means.

The DataGraph is therefore a useful inspection and exchange format, but it is not necessarily the smallest SPX representation.

## 6. Reflection Wheel and SPX tokens

The Reflection Wheel supplies compact position/value identifiers. In the canonical full uppercase range:

```text
A=1, B=2, C=3, ... Z=26
```

A contiguous reference range can itself be described by its endpoints, such as `AZ`. The canonical default is shared codec knowledge and need not be transmitted. If a compatible custom contiguous range is used, its two endpoints can describe the changed range and the dependent arrays can be regenerated deterministically.

SPX first handles simple homogeneous binary runs. For example:

```text
000000 -> AF
11111  -> aE
```

because `F=6` and `E=5` in the Reflection Wheel. Length 1 would expand, and length 2 merely breaks even, so length 3 is the first useful direct run reduction.

After run handling, generated SPX token families are searched from the largest useful structures toward smaller ones. Heatmap/index values and known DataGraph structure/separators also have deterministic token forms. These rules deliberately consume syntax that the detangler already knows how to rebuild.

## 7. SPX-QEC live references

SPX-QEC is a later layer and is distinct from the predefined SPX token arrays. After the earlier SPX reductions, QEC searches the **current reduced path** for reusable structures.

The first occurrence remains available as reconstruction material. Later occurrences may be replaced by a compact reference describing where the retained object can be found and how much of it is used. Because the path itself contains the retained reference, the dynamic QEC table does not need to be serialized as a conventional dictionary.

The historical `Hello World` paper fixture remains a useful compatibility example:

```text
DataGraph              L102
SPX static form         L77
QEC SPX PATH            L73
```

with demonstrated QEC references including `1001 -> 2Bd`, `118 -> Vc`, and `101 -> Pc`.

## 8. Detangling

Detangling reverses the process in a bounded, deterministic order. A current SPX PATH is first expanded through QEC references, then through the appropriate SPX token families and structural grammar until its DataGraph is recovered. The rails and locator information are then inverted through the between-state transform and Node map to recover the source.

A public detangler should report unresolved or ambiguous historical material rather than silently guessing. This is especially important because older SPX prototypes contain incomplete and context-sensitive experimental rules.

## 9. Live operation

SPX was conceived as a live demonstration: typing changes the working data and the visible encoded state immediately. A practical live implementation can reuse the unchanged prefix of a previous input and recompute only the affected suffix and dependent parity/token state.

The same deterministic state-machine viewpoint also makes an embedded implementation plausible. The Reflection Wheel and Node maps can live in ROM/Flash; the parity loop needs only a small active buffer and carry state; and a bounded QEC search can use a fixed history window. An STM32-class microcontroller is a more practical first embedded target than a custom chip, although a reduced historical demonstration could also be implemented for older 8-bit architectures.

## 10. Verification and correction research

SPX has historically explored multiple independent views for checking an encoded object: parity families, Node/group restrictions, geometry-inspired witnesses, and dual-plane/polygon comparisons. These ideas are still experimental.

The public lab separates **verification research** from the compact SPX PATH whenever possible. Debugging information, test reports, hashes, and verbose audit metadata are useful for development but are not automatically part of the compressed path.

The geometry concept is inspired by classical drawing measurement: a common reference dimension is used to compare whether independently constructed shapes agree. In the repaired interpretation, geometry is treated as an additional witness, not as a replacement for exact decoding mathematics.

## 11. Public Boot Camp

The public lab includes an SPX Boot Camp page for testing a shared SPX PATH, DataGraph, or array. Boot Camp is intended as a compatibility exercise, not a security certification. It can classify an input, attempt a proven detangle, rebuild recovered text with the current encoder, test deterministic reproduction, verify that the rebuilt compact path is sectionless, and report token activity and round-trip status.

An unresolved result does not automatically mean the historical SPX object is invalid. It may mean the public build does not yet implement that particular historical rule or ABI.

## 12. Limits and responsible claims

SPX is experimental. The current public implementation should not be treated as production cryptography or as a replacement for standardized compression, integrity, or error-correction systems.

A short-looking encoding is not automatically net compression. Shared LUTs and deterministic codec rules are external knowledge available to both sides. Arbitrary high-entropy data cannot always be represented by a shorter, self-contained, lossless string. SPX is most interesting when its deterministic rules, relational transforms, known structures, and retained references allow a smaller reconstruction path for a particular input.

## 13. Credits

SPX, SuPosXt, its original concept, historical code, Node mapping, Reflection Wheel, parity ideas, diagrams, terminology, and creative direction were created by **3Douglas Pihl**, known as **@Z0M8I3D / DigiMancer3D**, a BitNinja and Digital Mancer.

OpenAI's **ChatGPT** assisted during the 2026 repair/reconstruction effort by reviewing the creator's historical code and notes, isolating implementation bugs, formalizing reversible portions of the system, rebuilding the live encode/detangle/token pipeline, adding regression tests, and helping prepare the public lab and documentation. ChatGPT is credited as an assisting tool; SPX remains the work and concept of its original creator.

## Project links

- GitHub profile: https://github.com/DigiMancer3D
- SPX: https://github.com/DigiMancer3D/SPX
- SPX-QEC: https://github.com/DigiMancer3D/SPX-QEC
- X: https://x.com/Z0M8I3D
- ChatGPT: https://chatgpt.com/
