---
id: api
title: API Reference
---

# API Reference

## Modules
- [`bas_vec.py`](src/rapid2/bas_vec.py): Reads basin files and extracts river IDs.
- [`con_vec.py`](src/rapid2/con_vec.py): Parses connectivity files.
- [`ccc_mat.py`](src/rapid2/ccc_mat.py): Creates parameter matrices.
- [`mus_rte.py`](src/rapid2/mus_rte.py): Implements Muskingum routing.

## Usage
```python
from rapid2.bas_vec import bas_vec
basins = bas_vec("path/to/basin.csv")
print(basins)
```