---
title: "Code Scout"
description: "NLP-based Code Search Tool that lets developers query large codebases using natural language"
date: 2025-01-01
featured: true
tags: ["NLP", "Python", "Next.js", "Flask", "ChromaDB"]
links:
  - name: "GitHub"
    url: "https://github.com/SatvikG7/CodeScout"
    icon: "github"
---

## Overview

Code Scout is a semantic search engine that lets developers query large codebases using natural language. It goes beyond simple text matching to understand the intent behind your queries.

## Key Features

- **Natural Language Search** — Query your codebase using plain English questions like "Where is the authentication logic?" or "Find functions that handle file uploads"
- **Code Explanation** — Get AI-powered explanations of complex code snippets
- **Diff Analysis** — Understand changes between code versions
- **Standards Compliance Checking** — Verify code against best practices and style guidelines

## Technical Architecture

Built as a multitier system with multiple interfaces:
- **Web App** — Next.js frontend for browser-based access
- **VS Code Extension** — Integrated directly into your development workflow
- **REST APIs** — Flask backend for flexible integration
- **CLI Tool** — Python command-line interface for terminal users

## Tech Stack

- **LLMs:** Llama 3.1 3B, Gemma2 2B
- **Vector Database:** ChromaDB for semantic search
- **Frontend:** Next.js
- **Backend:** Flask REST API
- **CLI:** Python
