module.exports = {
  title: "Webb Site",
  description: "Note my life",
  host: "localhost",
  port: "8042",
  base: "/blog/",
  extraWatchFiles: [],
  theme: "@vuepress/theme-blog",
  themeConfig: {
    nav: [
      // {
      //   text: "Wish List",
      //   ariaLabel: "Wish List Menu",
      //   items: [
      //     {
      //       text: "Food",
      //       link:
      //         "https://www.notion.so/06e56a34024e499eb4f9e4266df47140?v=1dbb15047dc94827894f76116265922e"
      //     }
      //   ]
      // },
      // {
      //   text: "Side Project",
      //   ariaLabel: "Side Project Menu",
      //   items: [
      //     {
      //       text: "Linebot",
      //       link: "#"
      //     },
      //     {
      //       text: "Webb Site",
      //       link: "#"
      //     }
      //   ]
      // },
      {
        text: "Webb Page",
        link: "https://uwaylu.github.io",
      },
      {
        text: "Blog",
        link: "/",
      },
      {
        text: "Tags",
        link: "/tag/",
      },
    ],
    sidebar: "auto",
  },
  plugins: [
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-93999900-2",
      },
    ],
    "vuepress-plugin-mermaidjs",
    [
      "@vuepress/blog",
      {
        sitemap: {
          hostname: "https://uwaylu.github.io/blog",
        },
        feed: {
          canonical_base: "https://uwaylu.github.io/blog",
          rss: true,
        },
        directories: [
          {
            id: "post",
            dirname: "_posts",
            path: "/",
            itemPermalink: "/:year/:month/:day/:slug",
            pagination: {
              perPagePosts: 5,
            },
          },
        ],
        frontmatters: [
          {
            id: "tag",
            keys: ["tags"],
            path: "/tag/",
          },
        ],
      },
    ],
  ],
  markdown: {
    config: (md) => {
      md.set({ breaks: true });
    },
  },
};
