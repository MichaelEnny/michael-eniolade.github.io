---
layout: page
title: Orbit Wars
description: Kaggle competition — rule-based AI agent for a real-time 2D planetary strategy game with orbital mechanics, comet interception, and multi-phase decision logic.
importance: 9
category: AI/ML
github: https://github.com/MichaelEnny/orbit-wars
---

Built a competitive AI agent for the Kaggle **Orbit Wars** competition — a real-time strategy game where 2–4 players battle to control planets orbiting a sun in a 100×100 continuous 2D space over 500 turns.

The agent operates in four decision phases each turn:

1. **Emergency defense** — detects incoming enemy fleets and pulls reinforcements from the nearest friendly planets before committing any attacks.
2. **Comet interception** — identifies passing comets with sufficient time remaining and dispatches the closest planet's fleet using an iterative intercept solution that leads the moving target.
3. **Attack prioritization** — scores every valid target by production value, distance, and garrison strength, then fires from each owned planet at the highest-value affordable capture.
4. **Surplus redistribution** — funnels idle ships to the highest-production planet so no ships are wasted sitting on overflow garrisons.

Key engineering decisions included iterative intercept targeting for orbiting planets, analytical sun-crossing detection to avoid fleet loss, logarithmic fleet speed modelling, and a threat-aware garrison floor that adapts dynamically to incoming enemy ship counts.

**Tech Stack:** Python, Kaggle Environments.