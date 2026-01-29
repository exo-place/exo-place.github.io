# Hologram

Discord bot for collaborative worldbuilding and roleplay.

**Status:** Active

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
- [Documentation](https://exo-place.github.io/hologram/)
