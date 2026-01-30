# Hologram

Discord bot for collaborative worldbuilding and roleplay.

::: info Status: Fleshed Out ◐
~9K lines of TypeScript across 22 source files. Core message pipeline operational with 16 LLM providers, entity-facts model, conditional logic, streaming, webhooks, onboarding, and usage quotas. 188 tests covering the expression evaluator. Remaining work is UX simplification and architecture streamlining rather than foundation building.
:::

## Core Concept

Everything is an **entity** with **facts** — a single text-based list of definitions. Characters, locations, items, even help topics. No rigid schemas, just freeform descriptions that the LLM interprets.

```
Entity: Aria
Facts:
  - is a character
  - has silver hair and violet eyes
  - speaks with a slight accent
  - $if mentioned: $respond
```

Bind an entity to a Discord channel and it comes alive.

## Key Features

- **Entity-facts model** — everything is an entity with a freeform text definition
- **Conditional logic** — `$if` expressions for response control, random effects, time-based behavior
- **Multi-character** — multiple entities bound to one channel, each responding via webhooks
- **Streaming** — progressive LLM responses with configurable chunking
- **Provider-agnostic** — Google, Anthropic, or OpenAI via AI SDK

## Links

- [GitHub](https://github.com/exo-place/hologram)
- [Documentation](https://docs.exo.place/hologram/)
