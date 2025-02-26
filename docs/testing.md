---
id: testing
title: Testing
---

# Testing

RAPID2 uses various testing tools to ensure code quality:
- **Markdown Linter:** `pymarkdown scan *.md`
- **YAML Linter:** `yamllint .github/workflows/*.yml .*.yml`
- **Python Linter:** `flake8 src/*.py src/rapid2/*.py`
- **Type Checking:** `mypy --strict src/*.py src/rapid2/*.py`

For details, check [TESTING.md](https://github.com/c-h-david/rapid2/blob/main/TESTING.md).