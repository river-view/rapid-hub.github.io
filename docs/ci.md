---
id: ci
title: Continuous Integration (CI)
---

# Continuous Integration

## Purpose
The CI workflow ensures that all code commits are validated through a series of automated tests.

## Triggers
- Pushes to `main` branch
- Tags starting with `v*`

## Steps
1. Check out repository
2. Install dependencies
3. Run linters and tests
4. Validate Dockerfile

Refer to the [CI configuration file](https://github.com/c-h-david/rapid2/blob/main/.github/workflows/CI.yml) for details.
