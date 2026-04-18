---
layout: page
title: RL Inventory Optimization
description: Deep reinforcement learning agents (PPO & DQN) trained to optimize inventory management and minimize stockouts.
importance: 8
category: AI/ML
---

Trained deep reinforcement learning agents to solve an inventory management problem, benchmarking PPO and DQN against a supervised learning baseline.

Applied epsilon-greedy exploration annealed from 1.0 → 0.05 to balance exploration and exploitation over the course of training.

**Hyperparameters:** lr=1e-4, buffer=50k, γ=0.99, target update=1000 steps

**Key Metrics**
- Cumulative reward — primary optimization objective
- Service level — fraction of demand met (no stockout)
- Convergence — mean episode reward vs training timesteps
- Reward distribution — episode-level variance across 200 evaluation runs

**Tech Stack:** Gymnasium, Stable Baselines 3 (PPO & DQN), PyTorch, scikit-learn, Matplotlib.
