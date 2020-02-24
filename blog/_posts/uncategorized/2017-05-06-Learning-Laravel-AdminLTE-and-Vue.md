---
title: Laravel-AdminLTE 中如何使用 Vue 開發
date: 2017-05-06
tags: ["web開發", "開發", "Laravel", "tools", "F2E", "posted"]
notebook: 15.Laravel
---

# Laravel-AdminLTE 中如何使用 Vue 開發
1. page source 反查出 app.js
2. 於 Vue 虛擬 DOM 中新增測試訊息並顯示
  
```javascript
// public/js/app.js
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello, World! 20170506 added; webpack test.'
  }
});
```
3. 此 app.js 為打包出來的檔案；故配置前端開發環境，從塊源碼開發
4. 詳細的[解惑文件][1]

## Laravel project 中配置前端開發環境

Laravel 5.4+ 後有 Laravel Mix，能夠定義 webpack 的 compile script.

1. 如果 new project 時沒有還原相依的 node_modules，須作 `npm install`
2. 透過 Mix 執行 webpack compile； `npm run dev` | `npm run production`
3. 開發時可執行 `npm run watch` ，監聽到修改時自動編譯文件

## Windows 下 npm run 可能會遇到的錯誤
1. node-sass 找不到路徑之錯誤，透過 `npm rebuild node-sass` 修復；見[Stackflow: Laravel elixir Sass error][2]
2. (adminLTE) /img/boxed-bg.jpg 之相關報錯，在 `webpack.mix.js` 中新增 `mix.options({ processCssUrls: false });`；
   見[AdminLTE on Github: Dependencies error with new laravel (5.4) webpack.][3]
3. `npm install cross-env --save-dev` ；[使用cross-env解决跨平台设置NODE_ENV的问题][4]

<!-- 參考資料 -->

[1]: http://laravelacademy.org/post/6798.html "[ Laravel 5.4 文档 ] 前端 —— 编译资源（Laravel Mix）"
[2]: http://stackoverflow.com/questions/39173020/laravel-elixir-sass-error "Laravel elixir Sass error"
[3]: https://github.com/almasaeed2010/AdminLTE/issues/1360 "Dependencies error with new laravel (5.4) webpack."
[4]: https://segmentfault.com/a/1190000005811347 "使用cross-env解决跨平台设置NODE_ENV的问题"
