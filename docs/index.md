---
id: index
title: RAPID2 Overview
---

# RAPID2

## Introduction

RAPID2 (Routing Application for Python Integration of Discharge) is a next-generation hydrologic routing model designed for large-scale river network simulations. It builds on the RAPID framework, originally developed for parallel river flow computations, with enhanced scalability, usability, and integration with modern data formats.

## Key Features

- **Hydrologic Routing**: Implements the Muskingum routing method with an optimized matrix-based formulation.
- **Basin Analysis**: Supports hierarchical basin delineation and scalable computations for global river networks.
- **Connectivity Mapping**: Automates river reach linkage using spatial and topological data validation.
- **NetCDF Integration**: Streamlined input/output handling for large-scale hydrologic simulations.
- **Python-Based Workflow**: Improved usability and extensibility for scientific and operational applications.

## Advancements from RAPID

- **Optimized Performance**: RAPID2 improves computational efficiency, enabling faster routing over large networks.
- **Automated Network Processing**: Reduces manual preprocessing with built-in connectivity verification.
- **Flexible and Scalable**: Supports both regional and global hydrologic routing using modern datasets like MERIT-Hydro and NHDPlus.
- **Enhanced Data Interoperability**: Direct integration with NetCDF-based inflows and hydrologic model outputs.

## Scientific Background

RAPID2 builds upon the foundational work established in RAPID, which has been widely cited in hydrologic modeling studies. Key references include:

- **David et al. (2011)** – RAPID model introduction ([DOI: 10.1175/2011JHM1345.1](https://doi.org/10.1175/2011JHM1345.1))
- **David et al. (2011)** – Application in French hydrologic modeling ([DOI: 10.1002/hyp.8070](https://doi.org/10.1002/hyp.8070))
- **David et al. (2016)** – A decade of open-source RAPID development ([DOI: 10.1002/2015EA000142](https://doi.org/10.1002/2015EA000142))

For datasets and further research, visit the [ORCID profile](https://orcid.org/0000-0002-0924-5907) or access [Zenodo repositories](https://doi.org/10.5281/zenodo.10013744), ([Zenodo 2](https://doi.org/10.5281/zenodo.30228)).

## Installation

Follow the [Installation Guide](installation.md) for setup instructions.

## Context Diagram

![RAPID2 Context Diagram](/img/C4_Context_Diagram.svg)
