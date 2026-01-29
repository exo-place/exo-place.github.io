# Scaffolding Templates

Standard files for new Bun/TypeScript projects in the exo-place ecosystem.

## Usage

Copy files to your new repo and replace placeholders:

```bash
# Copy all scaffolding files
cp -r scaffolding/. ~/git/exo-place/new-project/

# Replace placeholders
sed -i 's/PROJECT_NAME/your-project/g' ~/git/exo-place/new-project/flake.nix ~/git/exo-place/new-project/docs/package.json ~/git/exo-place/new-project/CLAUDE.md
sed -i 's/PROJECT_DESCRIPTION/Your description/g' ~/git/exo-place/new-project/flake.nix ~/git/exo-place/new-project/CLAUDE.md
```

## Files Included

| File | Purpose |
|------|---------|
| `.envrc` | direnv + nix-direnv integration |
| `.gitignore` | Standard ignores for Bun + Nix |
| `.githooks/pre-commit` | oxlint + tsgo type check |
| `.githooks/commit-msg` | Conventional commits validation |
| `.github/workflows/ci.yml` | CI: lint, type check, test |
| `.github/workflows/deploy-docs.yml` | VitePress docs to GitHub Pages |
| `flake.nix` | Nix dev shell with Bun |
| `docs/package.json` | VitePress config |
| `CLAUDE.md` | Template behavioral rules |

## Placeholders

- `PROJECT_NAME` - lowercase project name (e.g., `aspect`)
- `PROJECT_DESCRIPTION` - short description

## Additional Setup

After copying, you'll also need:

1. `package.json` - project dependencies
2. `tsconfig.json` - TypeScript config
3. `bunfig.toml` - Bun config (if tests)
4. `src/` - your source code
5. `docs/.vitepress/config.ts` - VitePress config
6. `docs/index.md` - docs home page
