# WeaveFox 文档网站

🦊 [WeaveFox](https://www.weavefox.cn/) 官方指南：掌握提示工程，构建、部署和扩展 AI 全栈应用。

![WeaveFox 首页](/img/weavefox-home.png)

> 本网站使用 [Docusaurus](https://docusaurus.io/) 构建，一个现代化的静态网站生成器。

## 安装

```bash
pnpm i
```

## 本地开发

```bash
pnpm start
```

此命令启动本地开发服务器并打开浏览器窗口。大多数更改会实时反映，无需重启服务器。

## 构建

```bash
pnpm build
```

此命令生成静态内容到 `build` 目录，可以使用任何静态内容托管服务进行部署。

## 部署

使用 SSH：

```bash
USE_SSH=true pnpm deploy
```

不使用 SSH：

```bash
GIT_USER=<你的 GitHub 用户名> pnpm deploy
```

如果使用 GitHub Pages 托管，此命令可以方便地构建网站并推送到 `gh-pages` 分支。