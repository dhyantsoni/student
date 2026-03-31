---
toc: true
layout: post
title: AP CSP MCQ Reflection — 2020 vs 2021 Practice Exams
description: Honest reflection on my growth, patterns in what I missed, and what I still need to lock down before the AP exam.
courses: { csp: {week: 30} }
categories: [AP CSP]
type: ccc
---

## The Numbers

| Exam | Score | Percentage |
|------|-------|------------|
| 2020 Practice Exam 1 MCQ | 55/67 | 82.1% |
| 2021 MakeUp Practice Exam MCQ | 64/70 | 91.4% |

12 wrong down to 6. That felt good to see — not because the number itself matters that much, but because I could actually feel the difference while taking the second exam. Questions that would've tripped me up a few months ago felt routine.

## Where I Actually Grew

### Algorithms and Debugging

Developing Algorithms (3.9) was my worst topic on the first exam — 25%, which is basically guessing. On the 2021 MakeUp I got every one of those questions right. The difference was just putting in reps with flowcharts and robot problems until I stopped overthinking them and started actually tracing through step by step.

Same story with Identifying and Correcting Errors (1.4) — went from 71% to 100%. I used to rush through debugging questions and make assumptions about what the code was doing. Now I force myself to trace every variable, every iteration. It's slower but it works.

### Binary and Data

Binary Numbers (2.1) went from 80% to 100%, and the second exam had more questions on it. Overflow errors, bit representations, number conversions — this stuff just clicked after enough practice. Extracting Information from Data (2.3) also went to 100%. Reading tables and filtering data isn't conceptually hard, I just needed to slow down and actually read what the question was asking.

### The "Impact" Topics

Random Values, Algorithmic Efficiency, Crowdsourcing, Legal/Ethical Concerns — all improved to 100%. Safe Computing was already my strongest area at 100% and I kept it there across 9 questions on the second exam. These topics are less about raw problem-solving and more about understanding concepts, and I think going through past questions helped me learn exactly how College Board phrases things.

## What's Still Giving Me Trouble

### Fault Tolerance (4.2) — My Worst Topic

This one actually got *worse*. Went from 50% to 33%. Both exams hit me with network diagram questions about removing connections, and I missed them both times. The problem is I keep misjudging which connections are redundant. When a question asks "which connection can be removed while still allowing all devices to communicate," I need to actually trace every possible path between every pair of nodes — not just eyeball it and assume there's a backup route.

**What I'm going to do about it:** Draw out network diagrams by hand. For each connection, remove it mentally and check: can every node still reach every other node? If yes, it's redundant. If no, it's critical. I need to build this as a habit, not a shortcut.

### Conditionals (3.6) + Iteration (3.8) — The Combo Problem

Here's the pattern that I noticed: I can handle conditionals fine on their own (100% on the 2020 exam). I can handle iteration fine on its own (100% on the 2020 exam). But when the 2021 MakeUp threw questions that combined both — nested conditionals inside loops, robot grid movement with conditional checks — I started dropping points. Conditionals fell to 67%, iteration fell to 82%.

The questions I missed weren't testing one concept. They were testing whether I could hold multiple things in my head at once: track a loop counter, evaluate a conditional at each step, update a position on a grid, and keep going for 10+ iterations without losing track.

**What I'm going to do about it:** Practice multi-step tracing problems specifically. Not just "what does this loop do" but "trace this robot through a grid with conditional turns for 15 steps." I need to get comfortable with the mental overhead of combining concepts.

### Data Compression (2.2) and Math Expressions (3.3)

Both went from 100% to below that, but the sample sizes are tiny (1 question each on the first exam). Still, the compression question I missed was about lossy vs. lossless — I need to make sure I can clearly explain when you'd use each and what the tradeoffs are. The math expression question I missed was embedded in a bigger problem, which ties back to the "combo problem" above.

### Program Function and Purpose (1.2)

Wasn't on the 2020 exam, so the 2021 MakeUp was my first time seeing it — got 50%. The question I missed was about what data a user's device provides vs. what an app collects. It's a conceptual distinction (what a program *does* vs. *how* it does it) that I just need to internalize.

## Patterns I See in My Mistakes

Looking across both exams, there's a clear theme: **I'm solid on individual concepts but struggle when questions layer multiple skills together.** The robot grid problems are the clearest example — they combine spatial reasoning, iteration, conditionals, and sometimes mathematical expressions all in one question. When I miss questions now, it's rarely because I don't understand a topic. It's because the question is testing 2-3 topics at once and I lose track of something mid-trace.

The other pattern is **network/graph reasoning**. Fault tolerance has been a weak spot across both exams. I think I rely too much on intuition with network diagrams instead of being methodical.

## Game Plan

1. **Network diagrams** — Find practice problems specifically about fault tolerance and redundant paths. Trace every path, don't eyeball.
2. **Multi-step tracing** — Practice robot grid problems and loop-tracing problems that combine conditionals and iteration. Write out every step on paper.
3. **Review lossy vs. lossless compression** — Small topic but easy points if I just nail down the definitions and tradeoffs.
4. **Program purpose questions** — Review what College Board means by "function" vs. "purpose" and how they ask about data collection.

Going from 82% to 91% is real progress. But the remaining 9% is where the harder questions live, and closing that gap means getting comfortable with complexity, not just knowing individual topics.
