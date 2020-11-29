---
title: Hello Blog
date: 2020-02-24
updated: 2020-07-23
tags:
  - Blog
  - Vuepress
  - Config
author: Webb Lu
location: Kaohsiung, Taiwan
summary: First Article with vupress. Write todo, configurations and logs.
---

## Hello Blog (WIP)

- [x] Init with [vuepress](https://vuepress.vuejs.org/)
- [x] Init [vuepress/plugin-blog](https://vuepress-plugin-blog.ulivz.com/)
- [x] Init [vurpress/theme-blog](https://vuepress-theme-blog.ulivz.com/)
- [ ] Google Analysis
- [ ] 3rd-party Comment
- [x] Tags Cloud
- [ ] Blogger Info
- [ ] ...
+ [x] RSS

文章才是本體！先寫文章！

### Config with vurpress/theme-blog

```js
directories: [
  {
    id: "anime",
    dirname: "_posts/anime",
    path: "/anime/",
    itemPermalink: "/anime/:year/:month/:day/:slug",
    pagination: {
      perPagePosts: 5
    }
  },
  {
    id: "archived",
    dirname: "_posts/uncategorized",
    path: "/_posts/archived/",
    itemPermalink: "/archived/:year/:month/:day/:slug",
    pagination: {
      perPagePosts: 5
    }
  },
  {
    id: "post",
    dirname: "_posts",
    path: "/",
    itemPermalink: "/:year/:month/:day/:slug",
    pagination: {
      perPagePosts: 5
    }
  },
  
];
```

> 奇怪的是，以上配置在 SSR 可正常運作  
> 但在產生靜態完整時會出現錯誤  
> 故最後採預設配置

```bash
...
wait Rendering static HTML...
Rendering page: /anime/[Vue warn]: Error in render: "TypeError: Cannot read property 'interval' of undefined"

found in

---> <BaseListLayout>
       <Anonymous>
         <GlobalLayout>
           <Anonymous>
             <Root>
error Error rendering /anime/: false
undefined
TypeError: Cannot read property 'interval' of undefined
    at Pagination.get (node_modules/@vuepress/plugin-blog/lib/client/pagination.js:35:47)
    at Proxy.pages (node_modules/@vuepress/theme-blog/global-components/BaseListLayout.vue:96:30)
...
```



### nav

```md
.
├m─ About
│ ├── Me
│ └── Resume
│
├── Uncategorized
│
├m─ Wish List
│ ├── Food (Index Page to info and exp/review/gain)
│ ├── Buy 3C
│ ├── Home/Live
│ ├── Travel
│ └── Edu/Read/Learn
│
├m─ Projects
│ ├── Linebot
│ ├── Webbsite
│ └── My PHP utils
│
├m─ Languages
│ ├── 繁體中文
│ └── English
│
└── package.json
```
