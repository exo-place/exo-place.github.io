# Aspect

Card-based existence and identity exploration sandbox.

::: info Status: Growing ◔
~5.5K lines of TypeScript across 30 source files, with 3.2K lines of tests across 13 test files. Phases 1–2 complete: canvas-based graph editor, card/edge primitives, Y.js multiplayer, undo/redo, action system with JSONLogic, and world packs. Phases 3–4 (projection layer — rendering the graph as navigable place) not yet started.
:::

## Core Concept

Like MOOs, but the primitives are **navigate** and **edit** — not script. A space where identity is something you explore through cards rather than define through code.

Each card is a facet of existence — a place, a trait, a relationship, a state. Cards have edges connecting them to other cards, forming a navigable graph. You move along edges between cards and reshape what you find. The world is the sum of its cards and their connections.

## Design Principles

- **Navigate over script** — moving through a space is the fundamental interaction, not programming it
- **Edit over author** — changing what's there is as natural as looking at it
- **Cards over pages** — atomic, composable units of meaning rather than documents
- **Identity as exploration** — who you are emerges from where you go and what you change

## Links

- [GitHub](https://github.com/exo-place/aspect)
