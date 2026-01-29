# About exo

exo-place builds biomes — non-infrastructure-dependent places to exist.

Where [rhi](https://docs.rhi.zone/about) is glue layer (infrastructure, tooling, the substrate), exo is about what you do with it: places, identities, worlds.

## Philosophy

Software creates places. A Discord server is a place. A wiki is a place. A MUD is a place. But most software makes places that are rigid — defined by their developers, not their inhabitants.

exo projects create places where the inhabitants define the space:

- **Entities over schemas.** Things exist because you describe them, not because a developer predicted them.
- **Navigate and edit over script.** The fundamental interactions are moving through a space and changing what's there — not writing code.
- **Definitions over behavior.** What something *is* matters more than what it *does*. Behavior emerges from identity.

## Why places?

Most software optimizes for content consumption — feeds, notifications, metrics. The result is [software that makes things worse](https://docs.rhi.zone/problems#why-does-software-often-make-things-worse): engagement over wellbeing, performance over connection, audiences over communities.

But some software gets it right. [Discord works](https://docs.rhi.zone/problems#why-does-discord-work) because it creates *places* — servers with culture, history, regulars. Community, not audience. Conversation, not performance. Persistence — the history exists, you can scroll back.

exo projects take that insight further: what if the places were *programmable*? Not just chat rooms, but worlds where inhabitants shape the space itself. Where creation is the activity, not consumption. Where things you build persist for others to discover.

This is the [social with artifacts](https://docs.rhi.zone/problems#what-would-actually-help) model: not ephemeral posting, but building together. SCP energy — collaborative worldbuilding where creations accumulate and interconnect.

What would actually help people create?

- **First step trivially easy** — you do something and it exists. Not tutorials, not setup.
- **Permission to be imperfect** — constraints that say "of course it's rough, that's the point."
- **Creation as reward** — the making feels good. Not the likes. The making itself.
- **Real connection** — building together, not performing for each other.

These aren't features. They're [design values](https://docs.rhi.zone/problems#what-would-actually-help).

## Prior art

Things that inform what exo is building. See rhi's [full prior art page](https://docs.rhi.zone/prior-art) for broader context.

### Programmable worlds

| Name | What it is | Why it matters |
|------|-----------|----------------|
| [LambdaMOO](https://en.wikipedia.org/wiki/LambdaMOO) | Text-based virtual world (1990) | Fully programmable in user-space. Simple core, infinite possibility |
| [ChatMUD](https://www.chatmud.com/) | Modern MUD, social focus | Proof the form still works |
| [Resonite](https://resonite.com/) | VR social platform, programmable | Closest to "programmable VR world" today |
| [Second Life](https://secondlife.com/) | 3D virtual world | User-created everything. Proves the model |

LambdaMOO's insight: minimal core (objects, verbs, properties) + user-space programming = emergent complexity. The world becomes what users make it. 35 years later, this is still rare. exo's entity-facts model draws directly from this tradition.

### Collaborative worldbuilding

| Name | What it is | Why it matters |
|------|-----------|----------------|
| [SCP Foundation](https://scp-wiki.wikidot.com/) | Collaborative horror fiction wiki | Massively successful collaborative worldbuilding |
| [Orion's Arm](https://www.orionsarm.com/) | Hard SF collaborative universe | 25+ years of accumulated lore |
| [AO3](https://archiveofourown.org/) | Fanfiction archive | Community-owned, thriving, proves scale possible |
| [Minecraft](https://minecraft.net) | Block-based survival/building | Collaborative worldbuilding at scale. Builds persist |
| [nightfall.city](https://nightfall.city/) | Text city via telnet | Community as narrative structure |

The energy for collaborative creation exists. The question is why this energy is mostly in wikis and game servers rather than programmable systems. hologram is an attempt to bridge that — collaborative worldbuilding inside Discord, where the community already lives.

### Interactive fiction

| Name | What it is | Why it matters |
|------|-----------|----------------|
| [Counterfeit Monkey](https://ifdb.org/viewgame?id=aearuuxv83plclpl) | Emily Short, 2012 | Wordplay as world mechanic. Text can be deep |
| [Galatea](https://ifdb.org/viewgame?id=urxrv27t7qtu52lb) | Emily Short, 2000 | Conversation as gameplay. Mood modeling |
| [Versu](https://emshort.blog/2013/02/26/versu/) | Emily Short + Richard Evans | Social simulation engine |

The IF community proves that text-based interaction can be rich, deep, and rewarding. They kept making things while the rest of the industry chased graphics. hologram's entity-facts model has roots here — text as the medium for defining worlds.

### Creative constraints

| Name | What it is | Why it matters |
|------|-----------|----------------|
| [PICO-8](https://www.lexaloffle.com/pico-8.php) | Fantasy console | Intentional limits → focused creativity |
| [Shadertoy](https://www.shadertoy.com/) | Shader art community | GPU programming accessible, instant feedback |
| [TidalCycles](https://tidalcycles.org/) / [Strudel](https://strudel.cc/) | Live coding music | Pattern-based, immediate feedback |

These prove that constraints aren't limitations — they're focusing functions. PICO-8's 128x128 resolution means you can't bikeshed on asset quality. The creativity happens *because* of the limits, not despite them. aspect's card-based model takes the same approach — constrained primitives that focus creative energy.

## Projects

| Project | Description |
|---------|-------------|
| [hologram](https://github.com/exo-place/hologram) | Discord bot for collaborative worldbuilding — entities with text-based definitions |
| [aspect](https://github.com/exo-place/aspect) | Card-based identity exploration sandbox — navigate and edit as primitives |

## Relationship to rhi

exo-place projects are biomes that can grow on any substrate. They don't depend on rhi infrastructure, but they share sensibilities:

- Bun/TypeScript runtime
- VitePress documentation
- Nix development environments
- Conventional commits

exo draws heavily from rhi's thinking on [why software is hard](https://docs.rhi.zone/why-software-is-hard), the [problems](https://docs.rhi.zone/problems) software creates and could address, and the [vision](https://docs.rhi.zone/vision) of what software could be instead. Where rhi builds the substrate — unifying fragmented domains through shared abstractions — exo builds the biomes: the places where people actually live, create, and connect.
