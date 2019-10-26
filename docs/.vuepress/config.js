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
                text: 'Wish List',
                ariaLabel: 'Wishlist Menu',
                items: [
                    {
                        text: 'Food', link: 'https://www.google.com/search?q=台灣%20美食',
                    }
                ]
            }
        ],
        sidebar: [
            '/',
            '/page-a',
            ['/page-b', 'Explicit link text']
        ]
    }
}