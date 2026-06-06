# Graph Report - /home/nhanbeoo/Documents/CNS-AI-Final-term-Portfolio-main  (2026-06-06)

## Corpus Check
- Corpus is ~7,976 words - fits in a single context window. You may not need a graph.

## Summary
- 120 nodes · 163 edges · 11 communities (9 shown, 2 thin omitted)
- Extraction: 92% EXTRACTED · 8% INFERRED · 0% AMBIGUOUS · INFERRED: 13 edges (avg confidence: 0.82)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_UI Components and Pages|UI Components and Pages]]
- [[_COMMUNITY_Project Config and Concepts|Project Config and Concepts]]
- [[_COMMUNITY_Weekly Reports and Academic Concepts|Weekly Reports and Academic Concepts]]
- [[_COMMUNITY_TypeScript Compilation Configuration|TypeScript Compilation Configuration]]
- [[_COMMUNITY_Application Dependencies|Application Dependencies]]
- [[_COMMUNITY_Development Dependencies|Development Dependencies]]
- [[_COMMUNITY_NPM Build Scripts|NPM Build Scripts]]
- [[_COMMUNITY_AI Studio Manifest Metadata|AI Studio Manifest Metadata]]
- [[_COMMUNITY_Portfolio Chat Data Mock|Portfolio Chat Data Mock]]
- [[_COMMUNITY_Chat Messages Retrieval Helper|Chat Messages Retrieval Helper]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 15 edges
2. `TaskDetail Component` - 11 edges
3. `Tasks Component` - 10 edges
4. `README - Project Documentation` - 9 edges
5. `Home (Page Layout)` - 7 edges
6. `Báo cáo Sáng tạo Nội dung với AI (W5)` - 7 edges
7. `Báo cáo AI Có Trách nhiệm (W6)` - 7 edges
8. `scripts` - 6 edges
9. `Báo cáo Nghiên cứu Học thuật - GenAI Testing (W2)` - 6 edges
10. `App (Root Component)` - 5 edges

## Surprising Connections (you probably didn't know these)
- `TaskDetail Component` --references--> `Báo cáo Thao tác Tệp tin & Thư mục (W1)`  [INFERRED]
  src/components/TaskDetail.tsx → public/CNS_W1.pdf
- `TaskDetail Component` --references--> `Báo cáo Nghiên cứu Học thuật - GenAI Testing (W2)`  [INFERRED]
  src/components/TaskDetail.tsx → public/CNS_W2.pdf
- `TaskDetail Component` --references--> `Báo cáo Prompt Engineering (W3)`  [INFERRED]
  src/components/TaskDetail.tsx → public/CNS_W3.pdf
- `TaskDetail Component` --references--> `Báo cáo Công cụ Hợp tác Trực tuyến (W4)`  [INFERRED]
  src/components/TaskDetail.tsx → public/CNS_W4.pdf
- `TaskDetail Component` --references--> `Báo cáo Sáng tạo Nội dung với AI (W5)`  [INFERRED]
  src/components/TaskDetail.tsx → public/CNS_W5.pdf

## Communities (11 total, 2 thin omitted)

### Community 0 - "UI Components and Pages"
Cohesion: 0.08
Nodes (4): containerVariants, itemVariants, taskData, TaskResult

### Community 1 - "Project Config and Concepts"
Cohesion: 0.17
Nodes (21): App (Root Component), Home (Page Layout), ScrollHandler, Building Component, name, private, type, version (+13 more)

### Community 2 - "Weekly Reports and Academic Concepts"
Cohesion: 0.28
Nodes (16): Báo cáo Thao tác Tệp tin & Thư mục (W1), Báo cáo Nghiên cứu Học thuật - GenAI Testing (W2), Báo cáo Prompt Engineering (W3), Báo cáo Công cụ Hợp tác Trực tuyến (W4), Báo cáo Sáng tạo Nội dung với AI (W5), Báo cáo AI Có Trách nhiệm (W6), Agile / Kanban Collaboration Workflow, Responsible AI Ethics Framework (+8 more)

### Community 3 - "TypeScript Compilation Configuration"
Cohesion: 0.12
Nodes (16): compilerOptions, allowImportingTsExtensions, allowJs, experimentalDecorators, isolatedModules, jsx, lib, module (+8 more)

### Community 4 - "Application Dependencies"
Cohesion: 0.13
Nodes (15): dependencies, clsx, dotenv, express, framer-motion, @google/genai, lucide-react, motion (+7 more)

### Community 5 - "Development Dependencies"
Cohesion: 0.22
Nodes (9): devDependencies, autoprefixer, esbuild, tailwindcss, tsx, @types/express, @types/node, typescript (+1 more)

### Community 6 - "NPM Build Scripts"
Cohesion: 0.33
Nodes (6): scripts, build, clean, dev, lint, preview

### Community 7 - "AI Studio Manifest Metadata"
Cohesion: 0.40
Nodes (4): description, majorCapabilities, name, requestFramePermissions

## Knowledge Gaps
- **57 isolated node(s):** `name`, `description`, `requestFramePermissions`, `majorCapabilities`, `name` (+52 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `compilerOptions` connect `TypeScript Compilation Configuration` to `Project Config and Concepts`?**
  _High betweenness centrality (0.173) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Application Dependencies` to `Project Config and Concepts`?**
  _High betweenness centrality (0.163) - this node is a cross-community bridge._
- **Are the 7 inferred relationships involving `TaskDetail Component` (e.g. with `Chat List Data` and `Báo cáo Thao tác Tệp tin & Thư mục (W1)`) actually correct?**
  _`TaskDetail Component` has 7 INFERRED edges - model-reasoned connections that need verification._
- **What connects `name`, `description`, `requestFramePermissions` to the rest of the system?**
  _57 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `UI Components and Pages` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._
- **Should `TypeScript Compilation Configuration` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `Application Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._