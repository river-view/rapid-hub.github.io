---
id: cd
title: Continuous Deployment (CD)
---

# Continuous Deployment

## Purpose
The CD workflow automates the process of building and deploying RAPID2 images to Docker Hub.

## Triggers
- Pushes to `main` branch
- Tags starting with `v*`

## Steps
1. Set up QEMU and Docker Buildx
2. Authenticate to Docker Hub
3. Build and push multi-architecture images

Refer to the [CD configuration file](https://github.com/c-h-david/rapid2/blob/main/.github/workflows/CD.yml) for details.