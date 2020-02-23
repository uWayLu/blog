module.exports = {
  title: "Webb Site",
  description: "Note my life",
  host: "localhost",
  port: "8042",
  extraWatchFiles: [],
  theme: "@vuepress/theme-blog",
  themeConfig: {
    // nav: [
    //   {
    //     text: "Wish List",
    //     ariaLabel: "Wish List Menu",
    //     items: [
    //       {
    //         text: "Food",
    //         link:
    //           "https://www.notion.so/06e56a34024e499eb4f9e4266df47140?v=1dbb15047dc94827894f76116265922e"
    //       }
    //     ]
    //   },
    //   {
    //     text: "Side Project",
    //     ariaLabel: "Side Project Menu",
    //     items: [
    //       {
    //         text: "Linebot",
    //         link: "#"
    //       },
    //       {
    //         text: "Webb Site",
    //         link: "#"
    //       }
    //     ]
    //   },
    //   {
    //     text: "未分類",
    //     ariaLabel: "未分類文章",
    //     link: "/_posts/2019/10/07/天氣之子觀後感/"
    //   }
    // ],
    sidebar: "auto"
  },
  plugins: [
    [
      "@vuepress/blog",
      {
        sitemap: {
          hostname: "http://localhost:8042"
        },
        directories: [
          {
            id: "anime",
            dirname: "_posts/anime",
            path: "/_posts/anime/",
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
              perPagePosts: 1
            }
          }
        ]
      }
    ]
  ]
};
