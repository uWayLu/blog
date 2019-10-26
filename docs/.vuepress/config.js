module.exports = {
    title: 'Hello, welcome to Webb Site',
    description: 'Note my life',
    host: 'localhost',
    port: '8042',
    extraWatchFiles: [],
    themeConfig: {
        nav: [
            {
                text: 'Wish List',
                ariaLabel: 'Wish List Menu',
                items: [
                    {
                        text: 'Food', link: 'https://www.google.com/search?q=台灣%20美食',
                    }
                ]
            },
            {
                text: 'Side Project',
                ariaLabel: 'Side Project Menu',
                items: [
                    {
                        text: 'Linebot', link: '#',
                    },
                    {
                        text: 'Webb Site', link: '#'
                    }
                ]
            },
            {
                text: '未分類',
                ariaLabel: '未分類文章',
                link: '/uncategorized/天氣之子觀後感'
            }
        ],
        sidebar: 'auto'
    }
}