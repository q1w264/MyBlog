# Hugo 入门指南

*2026-06-27*

> 了解如何开始使用 Hugo —— 世界上最快的静态网站生成器。


Hugo 是最受欢迎的开源静态网站生成器之一。凭借其惊人的速度和灵活性，Hugo 让构建网站再次变得充满乐趣。

## 安装

安装 Hugo 非常简单。在 macOS 上，你可以使用 Homebrew：

```bash
brew install hugo

```

在 Windows 上，你可以使用 Chocolatey：

```bash
choco install hugo-extended

```

## 创建新站点

安装好 Hugo 后，创建一个新站点非常简单：

```bash
hugo new site my-blog
cd my-blog

```

## 添加内容

创建你的第一篇文章：

```bash
hugo new posts/my-first-post.md

```

## 运行本地开发服务器

使用以下命令启动开发服务器：

```bash
hugo server -D

```

你的站点将可以通过 `http://localhost:1313` 进行访问。

## 生产环境构建

当你准备好发布时，构建你的站点：

```bash
hugo

```

输出的静态文件将存放在 `public/` 目录中。

## 结语

Hugo 是一款功能强大且快速的静态网站生成器。不妨在你的下一个项目中尝试一下吧！



