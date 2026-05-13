# Agents

## 项目概览

WeaveFox 文档站点，基于 Docusaurus 3 构建。

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

## 自定义样式

样式覆写集中在 `src/css/custom.css`，遵循 **CSS 优先、Swizzle 最后** 的原则。

### 第一步：找到正确的类名和变量

去 node_modules 中查看 `@docusaurus/theme-classic` 源码：

1. **定位组件源码目录** — pnpm 项目下路径为 `node_modules/.pnpm/@docusaurus+theme-classic@版本号_*/node_modules/@docusaurus/theme-classic/src/theme/`
2. **阅读组件 TSX** — 找到 `clsx()`、`className` 中使用的稳定类名（如 `theme-doc-sidebar-container`、`hash-link`、`menu__link--active`），这些是跨版本稳定的
3. **阅读组件 CSS Module** — 同目录下的 `styles.module.css`，查看组件用了哪些 CSS 属性和变量（如 `border-right`、`box-shadow`、`content`），确认覆写目标
4. **查找 Infima 变量** — 如果是全局样式（颜色、阴影、间距），优先找 `--ifm-*` 变量覆写，避免硬编码
5. **避免使用 CSS Module 哈希类名** — 形如 `styles_xxx_yyy` 的类名是构建时生成的，升级后会变

### 第二步：确定覆写方式

按优先级从高到低尝试：

| 优先级 | 方式 | 适用场景 |
|--------|------|---------|
| 1 | Infima CSS 变量 | 全局颜色、间距、阴影等（`--ifm-*` 变量） |
| 2 | 稳定类名 + CSS 属性 | 组件级别样式（边框、间距、隐藏等） |
| 3 | mask-image + CSS 变量 | 自定义图标且需要跟随主题切换颜色 |
| 4 | clientModule + CSS | 需要 JS 交互的样式（如滚动检测） |
| 5 | Swizzle Wrap/Eject | 需要修改组件 DOM 结构时才使用 |

### 第三步：处理暗色模式

- 亮色模式变量在 `:root` 中定义，暗色模式在 `[data-theme='dark']` 中覆写
- 使用 `var(--ifm-font-color-base)` 等变量时，暗色模式会自动切换，无需额外处理
- 硬编码颜色值（如 `rgba(0,0,0,0.12)`）需要在 `[data-theme='dark']` 中单独调整

### 常见陷阱

- **data URI SVG 中 `currentColor` 不生效** — SVG 在 data URI 中是独立文档，不继承父元素颜色。用 `mask-image` 方案：SVG 只定义形状（`stroke='black'`），颜色由 `background-color: var(--ifm-font-color-base)` 控制
