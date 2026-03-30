# noncanon

Local-first collaborative worldbuilding library.

::: info Status: Seed ○
Just scaffolded. Core data model and gitoxide integration not yet started.
:::

## Core Concept

Collaborative worldbuilding platforms have a structural problem: the world lives on the platform. Platform dies, world dies. Contributors don't own what they made.

**noncanon** treats canon as a local concept. You pull in what you endorse. Everything else is noncanon — until it isn't. Divergence isn't a failure mode; it's the point. Parallel canons, alternate timelines, and contested lore aren't bugs to resolve — they're the natural state of a distributed world.

The model is git: local-first, distributed, merge when you want. The value isn't version control — it's that each contributor's copy is real and owned, regardless of what happens to any server or platform.

## Design Principles

- **Canon is local** — no central authority decides what's true; you decide for your copy
- **Divergence is a feature** — parallel canons can coexist; forking is free
- **Objects over files** — files are the on-disk representation; the primitive is the object
- **Sparse by default** — you don't need the whole world, just what you're building on
- **Rendering is separate** — the library handles semantics; display is someone else's concern

## Links

- [GitHub](https://github.com/exo-place/noncanon)
