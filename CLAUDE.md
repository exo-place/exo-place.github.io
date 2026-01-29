# CLAUDE.md

Behavioral rules for Claude Code in the exo ecosystem docs repository.

## Ecosystem

This is the organization-level documentation site for the exo-place ecosystem.

exo-place builds biomes — non-infrastructure-dependent places to exist. Where rhi is infrastructure, exo is what you do with it.

### Projects

| Project | Path | Description |
|---------|------|-------------|
| **hologram** | `~/git/exo-place/hologram` | Discord bot for collaborative worldbuilding — entities with text-based definitions |
| **aspect** | `~/git/exo-place/aspect` | Card-based identity exploration sandbox — navigate and edit as primitives |

### Org Resources

| Resource | Path | Description |
|----------|------|-------------|
| **.github** | `~/git/exo-place/profile` | Org-wide GitHub config, templates |
| **Docs site** | `~/git/exo-place/github-io` | This repo - org documentation |

## Responsibilities

### Keeping Docs in Sync

When projects change:
- Update project pages in `docs/projects/`
- Update the project table in `docs/about.md`
- Update `README.md` project table
- Update sidebar/nav in `.vitepress/config.ts`
- Update hero page features in `docs/index.md`

### Scaffolding New Repos

Template files are in `scaffolding/` directory. Copy and replace placeholders:

```bash
cp -r scaffolding/. ~/git/exo-place/new-project/
sed -i 's/PROJECT_NAME/new-project/g' ~/git/exo-place/new-project/flake.nix ~/git/exo-place/new-project/docs/package.json ~/git/exo-place/new-project/CLAUDE.md
sed -i 's/PROJECT_DESCRIPTION/Description here/g' ~/git/exo-place/new-project/flake.nix ~/git/exo-place/new-project/CLAUDE.md
```

**Included templates:**
- `.envrc` - nix-direnv integration
- `.gitignore` - Bun + Nix ignores
- `.githooks/pre-commit` - oxlint + tsgo
- `.githooks/commit-msg` - conventional commits validation
- `.github/workflows/ci.yml` - CI pipeline
- `.github/workflows/deploy-docs.yml` - VitePress deployment
- `flake.nix` - Nix dev shell
- `docs/package.json` - VitePress config
- `CLAUDE.md` - standard behavioral rules

**Still need manually:**
- `package.json` + `src/`
- `tsconfig.json`, `bunfig.toml`
- `docs/.vitepress/config.ts` + `docs/index.md`

### Docs Site Conventions

**Project docs should link back to the main ecosystem site:**

When a project has its own docs site, include a navbar link back to the main exo docs. In VitePress config:

```ts
nav: [
  // ... other nav items
  { text: 'exo', link: 'https://docs.exo.place/' },
]
```

## Core Rules

**Note things down immediately:**
- Ecosystem changes → this file or relevant project's docs
- Cross-project issues → TODO.md in affected repos
- Documentation updates → do them, don't defer

**Do the work properly.** When updating ecosystem docs, actually check the source repos for accuracy.

## Negative Constraints

Do not:
- Announce actions ("I will now...") - just do them
- Leave work uncommitted
- Make ecosystem changes without checking all affected repos
- Update docs without verifying against source
- Use `--no-verify` - fix the issue or fix the hook
- Assume tools are missing - check if `nix develop` is available for the right environment
