# Agents

## 项目概览

WeaveFox 文档站点，基于 Docusaurus 3 构建。独立于主仓库 pnpm workspace，拥有自己的依赖管理。

## 项目结构

```plain
docs/
├── docusaurus.config.ts   # Docusaurus 站点配置
├── sidebars.ts            # 侧边栏配置
├── src/
│   ├── css/               # 自定义样式
│   └── pages/             # 自定义页面
├── docs/                  # 文档内容（Markdown）
├── blog/                  # 博客内容（Markdown）
├── static/                # 静态资源
├── package.json
├── pnpm-workspace.yaml    # 空 workspace，隔离主仓库
└── .npmrc                 # 使用 npm 官方 registry
```

## 注意事项

- 本项目**不在**主仓库 pnpm workspace 内，依赖需在 `docs/` 目录下单独安装
- `.npmrc` 使用官方 registry（`https://registry.npmjs.org/`），与主仓库内网 registry 不同
- `pnpm-workspace.yaml` 设为 `packages: []`，防止 pnpm 向上查找主仓库 workspace

## 常用命令

```bash
# 安装依赖（在 docs/ 目录下执行）
pnpm install

# 本地开发
pnpm start

# 构建
pnpm build

# 本地预览构建产物
pnpm serve
```