# WeaveFox 文档

[WeaveFox](https://www.weavefox.cn/) 是**免费**的 AI 应用创作平台。无需代码，通过自然语言对话，自由创造个人专属的工具与独立应用。让创意即刻成形，一键即可分享给所有人使用。

> 官方文档：[docs.weavefox.ai](https://docs.weavefox.ai)

![WeaveFox 首页](/static/img/weavefox-home.png)

> [!TIP]
> 📚 推荐资源：[@weavefox/awesome-opc](https://www.npmjs.com/package/@weavefox/awesome-opc) — OPC 相关资源集合

## 文档内容

本仓库包含 WeaveFox 产品的全部帮助文档，涵盖以下板块：

### 介绍（Intro）

帮助新用户了解和上手 WeaveFox：

- **欢迎使用 WeaveFox** — 平台定位、目标用户、核心工作流介绍
- **快速开始** — 从创建第一个应用到发布的完整流程
- **创建账户** — 手机号注册、支付宝授权登录、工作台结构说明
- **套餐与额度** — 免费使用说明及集成服务配额
- **工作台概览** — 应用管理、个人主页、收藏、发现、技能与服务、通知系统
- **账户设置** — 账户配置（编写中）
- **删除账户** — 账户注销流程（编写中）

### 产品功能（Features）

WeaveFox 核心功能的使用指南：

- **应用创作（Vibe Coding）** — 通过自然语言对话构建应用，支持文字描述、参考图片、参考文档等多维度输入
- **技能（Skills）** — 可复用工作流模板的创建、使用与管理，包含技能编写规范和审核流程
- **应用协作** — 邀请团队成员协作编辑，只读/读写权限管理
- **发布应用** — 预览与发布的区别、访问控制、发布与下架操作
- **自定义域名** — 为应用绑定自定义域名，提升品牌与 SEO
- **数据分析** — 内置用户行为分析，自动采集 PV/UV、设备分布等数据，支持自定义事件埋点

### 集成服务（Integrations）

WeaveFox 支持的第三方服务集成：

- **Supabase** — 使用 Supabase 作为后端服务（编写中）
- **Appwrite** — 使用 Appwrite 作为后端服务（编写中）

### 最佳实践（Best Practices）

高效使用 WeaveFox 的技巧与经验总结：

- **VibeCoding 地图，可以如此简单** — 五个真实 Demo 展示如何用自然语言构建地图应用，从行政区划下钻到台风监测大屏，附可复制提示词

### 博客（Blog）

产品动态与使用心得，位于 `blog/` 目录。

## 本地开发

```bash
pnpm install
pnpm start
```

## 构建

```bash
pnpm build
```
