# Hologram

Discord bot for collaborative worldbuilding and roleplay.

::: info Status: Fleshed Out ◐
~9K lines of TypeScript across 22 source files. Core message pipeline operational with 17+ LLM providers, entity-facts model, expression language, streaming, webhooks, onboarding, and usage quotas. 188 tests covering the expression evaluator. Remaining work: prompt scaffolding cleanup, silent failure elimination, dynamic token allocation, zero-command start, shareable templates.
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

- **Entity-facts model** — everything is an entity with a freeform text definition, no rigid schemas
- **Expression language** — `$if` conditionals, `$respond`/`$stream`/`$model` directives, Roll20 dice syntax, macros, 20+ built-in functions
- **Multi-character** — multiple entities per channel via webhooks, XML tag parsing, freeform prose mode
- **Streaming** — progressive responses with custom delimiters, per-chunk or full-message editing
- **17+ LLM providers** — Google, Anthropic, OpenAI, Groq, Mistral, and more via AI SDK, with per-entity `$model` selection
- **Access control** — per-entity permissions (`$edit`, `$view`, `$blacklist`), BYOK encryption, usage quotas

## Links

- [GitHub](https://github.com/exo-place/hologram)
- [Documentation](https://docs.exo.place/hologram/)
