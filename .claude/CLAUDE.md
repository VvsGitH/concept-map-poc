# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A **readonly** React component (`ConceptMapViewer`) that renders a concept map as a radial tree with cross-links, plus a demo app for testing it. Built on `@xyflow/react` (React Flow 12) for the canvas, `d3-hierarchy` for layout, and `react-markdown` for node descriptions. PoC scope: no editing, search, image export, or virtualization.

The codebase and comments are in **Italian**; match that when editing existing files.

## Commands

```bash
npm install
npm run dev      # demo on http://localhost:5173
npm run build    # tsc -b (type-check) + vite build
npm run preview  # serve the production build
```

There is no test suite, linter, or single-test runner. `npm run build` is the only correctness gate — run it after changes since `tsc -b` catches type errors across the project references (`tsconfig.app.json` / `tsconfig.node.json`).

## Architecture

The component lives in `src/concept-map/` and is self-contained (importable via `index.ts`). The data flow is a one-way pipeline recomputed via `useMemo` whenever the map or expansion state changes:

```
ConceptMapData  →  buildGraphIndex (graph.ts)  →  GraphIndex (built once per map)
                                                        │
expandedChain (accordion state) ──────────────────────┤
                                                        ▼
                                   computeVisible (graph.ts)  →  VisibleGraph
                                                        │
                                                        ▼
                                   radialLayout (layout.ts)   →  positions Map
                                                        │
                                                        ▼
                                   ConceptMapViewer.tsx  →  React Flow nodes/edges
```

Key concepts that span multiple files:

- **Hierarchy vs. edges.** Tree structure is defined by `parentId`/`childrenIds` on nodes, NOT by `edges`. In `buildGraphIndex`, each edge is classified: if it connects a parent↔child pair it becomes a **branch label** (`treeEdgeLabels`, keyed by child id); otherwise it's a **cross-link** (rendered dashed red, only when both endpoints are visible). Inconsistent data (duplicate ids, missing children, unreachable nodes, dangling edges) is dropped with a `console.warn` rather than throwing — except a missing `rootId`, which throws.

- **Accordion expansion = a single root→node chain.** `expandedChain` in `ConceptMapViewer` is an array like `['a','b']` meaning root→a→b are expanded. The root is always implicitly expanded. Expanding any node calls `chainTo` to compute its full ancestor chain, which **collapses sibling branches at every level** (only one path is open at a time). `computeVisible` shows: root's children + the children of every node in the chain.

- **Radial layout** (`layout.ts`): d3 `tree()` assigns angles over `[0, 2π]`; each ring's radius is the max of (previous ring + `MIN_RING_GAP`) and the circumference needed to fit that depth's node count without overlap. Positions are node centers; `ConceptMapViewer` offsets by `NODE_W/2`/`NODE_H/2` because React Flow positions by top-left corner. Only visible nodes are laid out.

- **fitView behavior** (effect in `ConceptMapViewer`): after an expansion, animates to fit the just-opened subtree (focus node + its children); after a collapse, fits the whole graph. Respects `prefers-reduced-motion` (duration 0).

- **Nodes are non-interactive at the React Flow level** (`draggable/selectable/focusable: false`). Real interactivity lives in `ConceptNode.tsx` as actual `<button>` elements: the +/− toggle (`onToggle`) and the card body (`onOpen` → `NodeModal`). This keeps tab-order in BFS order (the order `computeVisible` returns nodes) and accessibility correct. `NodeModal` uses a native `<dialog>` for built-in focus trapping.

- **Node types** (`person | event | organization | other`) drive colors via `palette.ts` (`TYPE_STYLES`), used by both nodes and the legend.

## Demo data

`src/demo/` is the test harness. `data/builder.ts` exposes `buildMap(root, cross)` which converts an ergonomic **nested** `TreeDef` into the **flat** `ConceptMapData` contract (the shape a real server would send). Use it when adding example maps; see `data/small.ts` and `data/medium-stress.ts`.