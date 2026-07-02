---
title: "Getting Started with Hugo"
date: 2026-06-27
draft: false
tags: ["hugo", "static-site"]
archives: ["2026-06"]
categories: ["tutorial"]
author: "Hugo"
description: "Learn how to get started with Hugo, the world's fastest static site generator."
image: "hugo-logo.png"
contentType: repost
sourceTitle: "Getting Started with Hugo"
sourceUrl: "https://hugo-primer-blog-demo.ngs.io/posts/getting-started-with-hugo/"
---

Hugo is one of the most popular open-source static site generators. With its amazing speed and flexibility, Hugo makes building websites fun again.

## Installation

Installing Hugo is straightforward. On macOS, you can use Homebrew:

```bash
brew install hugo
```

On Windows, you can use Chocolatey:

```bash
choco install hugo-extended
```

## Creating a New Site

Once Hugo is installed, creating a new site is simple:

```bash
hugo new site my-blog
cd my-blog
```

## Adding Content

Create your first post:

```bash
hugo new posts/my-first-post.md
```

## Running the Development Server

Start the development server with:

```bash
hugo server -D
```

Your site will be available at `http://localhost:1313`.

## Building for Production

When you're ready to publish, build your site:

```bash
hugo
```

The output will be in the `public/` directory.

## Conclusion

Hugo is a powerful and fast static site generator. Give it a try for your next project!
