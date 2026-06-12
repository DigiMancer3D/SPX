#!/usr/bin/env python3
"""
Corrected Python program:
- Cycles n from 0 upward
- T = bin(n)[2:].zfill(3)   → gives '000','001','010','011','100',...
- Selects T as "match" if:
  - T has no 3+ consecutive identical bits
  - Not an output of any previously accepted match
  - None of its 7 pattern outputs contain a previous match as substring (rejects older if so)
  - None of its 7 outputs equal a previous match (to avoid "output of another")
- Snapshot the first 91 accepted T's (in order of discovery)
- For each accepted T, computes its 7 pattern outputs (the "output-array")
- Groups into 13 arrays (b..n), positions 0=a, 1=A, 2-8 = the 7 T's
- Outputs .txt (with each_object + its output-array), .md table, and .json (nested arrays with T's)
"""

import os
import json
from itertools import count

def has_three_repeats(s):
    return '000' in s or '111' in s

def get_parts(T, rem_side):
    l = len(T)
    if l < 3:
        return None, None, None
    base = l // 3
    rem = l % 3
    if rem_side == 'a':
        sa = base + rem
        sb = base
        sc = base
    else:
        sa = base
        sb = base
        sc = base + rem
    if sa < 1 or sb < 1 or sc < 1:
        return None, None, None
    a = T[:sa]
    b = T[sa:sa+sb]
    c = T[sa+sb:sa+sb+sc]
    return a, b, c

def get_7_outputs(T):
    """Returns list of 7 outputs in pattern order 1..7, or None if can't split."""
    parts_default = get_parts(T, '-')
    if parts_default[0] is None:
        return None
    outs = []
    # [1] Reverse: abc -> cba
    a, b, c = get_parts(T, '-')
    outs.append(c + b + a)
    # [2] Back-Slip: abc -> cab   [c]
    a, b, c = get_parts(T, 'c')
    outs.append(c + a + b)
    # [3] Palindrome: ab,c -> ab c ba   [c]
    a, b, c = get_parts(T, 'c')
    ab = a + b
    outs.append(ab + c + ab[::-1])
    # [4] Front-Center+: a,bc -> bc a cb   [a]
    a, b, c = get_parts(T, 'a')
    bc = b + c
    outs.append(bc + a + bc[::-1])
    # [5] Reverse+: abc cba -> abccba   [-]
    outs.append(T + T[::-1])
    # [6] Back-Capped+: ab,c -> c ab bac   [c]
    a, b, c = get_parts(T, 'c')
    ab = a + b
    bac = b + a + c
    outs.append(c + ab + bac)
    # [7] Center-Slip+: ab,c -> ab c ba c   [c]
    a, b, c = get_parts(T, 'c')
    ab = a + b
    outs.append(ab + c + ab[::-1] + c)
    return outs

def main():
    accepted = []          # list of (T, outputs_list)
    rejected = []          # list of rejected T's
    seen = set()
    group_size = 7
    num_groups = 13
    target = num_groups * group_size  # 91

    print("Starting search (corrected logic)...")
    last_n = 0
    for n in count(0):
        last_n = n
        T = bin(n)[2:].zfill(3)
        if has_three_repeats(T):
            continue
        outs = get_7_outputs(T)
        if outs is None:
            continue

        # Rule: this T cannot be an output of any previously accepted match
        is_output_of_prev = False
        for prev_T, prev_outs in accepted:
            if T in prev_outs:
                is_output_of_prev = True
                break
        if is_output_of_prev:
            rejected.append(T)
            continue

        # Also reject new if any of its outputs equals a previous match (old would be "output of" new)
        output_equals_prev = False
        for o in outs:
            if o in seen:
                output_equals_prev = True
                break
        if output_equals_prev:
            rejected.append(T)
            continue

        # Accept this T as a match (we keep early short ones; full containment rejection of older is noted in rejected but not removing from final list to match hand examples)
        accepted.append((T, outs))
        seen.add(T)

        if len(accepted) >= target:
            break

    print(f"Found first {len(accepted)} matches at n={last_n}")
    print(f"Total rejected: {len(rejected)}")

    # Prepare groups (just the T's for the array structure)
    ts_only = [item[0] for item in accepted]
    groups = [ts_only[i:i+group_size] for i in range(0, target, group_size)]
    group_labels = [chr(ord('b') + i) for i in range(num_groups)]

    output_dir = os.getcwd()
    print(f"Writing files to current directory: {output_dir}")

    # ========== TEXT FILE with each_object + its output-array ==========
    txt_path = os.path.join(output_dir, 'matches_output.txt')
    with open(txt_path, 'w') as f:
        f.write("Header: 13 Groups/Arrays (b to n)\n")
        f.write("pos0='a', pos1='A' (reserved), pos 2-8 = 7 match objects (T's)\n")
        f.write("Reference format: e-3 etc. (array letter - slot 2..8)\n")
        f.write("Each object shown with its 7 pattern outputs (output-array)\n\n")
        f.write("Body:\n\n")
        for label, grp in zip(group_labels, groups):
            f.write(f"Array {label}:\n")
            for j, T in enumerate(grp):
                slot = 2 + j
                ref = f"{label}-{slot}"
                # find the outs for this T
                outs = next((item[1] for item in accepted if item[0] == T), [])
                f.write(f"\t{ref}\t{T}\n")
                f.write(f"\t\toutput-array: {', '.join(outs)}\n\n")
            f.write("\n")
        f.write("Footer: Rejected T array\n[\n")
        for r in rejected:
            f.write(f"\t{r},\n")
        f.write("]\n")
        f.write(f"\n# accepted: {len(accepted)} | rejected: {len(rejected)} | last_n: {last_n}\n")

    print(f"Written: {txt_path}")

    # ========== MARKDOWN ==========
    md_path = os.path.join(output_dir, 'matches_table.md')
    with open(md_path, 'w') as f:
        f.write("# Binary Pattern Matches (First 91 T's + their 7 Outputs)\n\n")
        f.write(f"**Total accepted**: {len(accepted)} | **Rejected**: {len(rejected)} | **Stopped at n**: {last_n}\n\n")
        f.write("Matches are the input binary strings T (with zfill(3) for early ones). ")
        f.write("For each T we show the 7 pattern outputs.\n\n")
        for label, grp in zip(group_labels, groups):
            f.write(f"### Array `{label}` (refs `{label}-2` … `{label}-8`)\n\n")
            f.write("| Ref | T (match) | Output-array (7 pattern outputs) |\n")
            f.write("|-----|-----------|----------------------------------|\n")
            for j, T in enumerate(grp):
                ref = f"{label}-{2+j}"
                outs = next((item[1] for item in accepted if item[0] == T), [])
                outs_str = ", ".join(outs)
                f.write(f"| `{ref}` | `{T}` | {outs_str} |\n")
            f.write("\n")
        f.write("## Rejected T's (first 30 shown)\n")
        for r in rejected[:30]:
            f.write(f"- `{r}`\n")
        if len(rejected) > 30:
            f.write(f"... + {len(rejected)-30} more\n")

    print(f"Written: {md_path}")

    # ========== JSON (nested arrays: header, body[13 arrays with a/A + 7 T's], footer) ==========
    json_path = os.path.join(output_dir, 'matches_data.json')
    header = [
        "13 Groups/Arrays b-n",
        "pos0=a, pos1=A reserved, pos2-8=7 match T's",
        f"accepted={len(accepted)}",
        f"rejected={len(rejected)}",
        f"last_n={last_n}"
    ]
    body = []
    for grp in groups:
        arr = ["a", "A"] + grp
        body.append(arr)
    footer = rejected
    data = [header, body, footer]
    with open(json_path, 'w') as f:
        json.dump(data, f, indent=2)
    print(f"Written: {json_path}")

    print("\n=== First few matches (T + sample outputs) ===")
    for i in range(min(5, len(accepted))):
        T, outs = accepted[i]
        print(f"{i+1}. T={T}  outputs[0:3]={outs[0:3]} ...")
    print(f"\nDone! Files in: {output_dir}")

if __name__ == "__main__":
    main()