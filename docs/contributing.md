# Contributing

Guidelines for contributing to exo-place projects.

## Development Setup

Projects use Bun as the runtime:

```bash
bun install
bun run dev
```

For reproducible environments, projects include `flake.nix`:

```bash
nix develop
# or with direnv: direnv allow
```

## Commit Conventions

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
type(scope): description
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

## Code Style

- Use Bun as the runtime
- TypeScript with strict mode
- oxlint for linting, tsgo for type checking
- Prefer functional patterns
- Types are required, no `any`

## Pull Requests

1. Fork the repository
2. Create a feature branch from `master`
3. Make your changes with conventional commits
4. Ensure checks pass: `bun run lint && bun run check:types`
5. Open a PR with a clear description

## Documentation

Each project has a `docs/` directory with VitePress:

```bash
cd docs
bun install
bun run dev
```

## Questions?

Open an issue in the relevant repository.
