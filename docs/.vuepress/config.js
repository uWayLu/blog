module.exports = {
  title: "Webb Site",
  description: "Note my life",
  host: "localhost",
  port: "8042",
  extraWatchFiles: [],
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
    //     link: "/blog/2019/10/07/天氣之子觀後感/"
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
            id: "archived",
            dirname: "blog/uncategorized",
            path: "/blog/archived/",
            itemPermalink: `/archived/:year/:month/:day/:slug`,
            // pagination: {
            //   perPagePosts: 5
            // }
          },
          {
            id: "anime",
            dirname: "blog/anime",
            path: "/blog/anime/",
            itemPermalink: "/anime/:year/:month/:day/:slug",
            // pagination: {
            //   perPagePosts: 2
            // }
          },
          {
            id: "post",
            dirname: "blog",
            path: "/blog/",
            itemPermalink: "/blog/:year/:month/:day/:slug",
            // pagination: {
            //   perPagePosts: 2
            // }
          }
        ]
      }
    ]
  ]
};
