---
id: installation
title: Installation Guide
---

# Installation Guide

## Using Docker
RAPID2 can be easily installed using Docker:
```bash
docker pull chdavid/rapid2
docker run --rm -it chdavid/rapid2
```

## Manual Installation (Debian-based Systems)
1. Clone the repository:
```bash
git clone https://github.com/c-h-david/rapid2
cd rapid2/
```
2. Install dependencies:
```bash
sudo apt-get install -y --no-install-recommends $(grep -v -E '(^#|^$)' requirements.apt)
```
3. Set up Python environment:
```bash
python3 -m venv $HOME/venv
source $HOME/venv/bin/activate
pip install --no-cache-dir -r requirements.pip
```