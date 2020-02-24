---
title: 在 Laravel-AdminLTE 中使用 bootstrapVue
date: 2017-05-19
tags: ["PHP", "web開發", "開發", "Laravel", "posted"]
notebook: 15.Laravel
---

先前整理過一篇筆記，[Laravel-AdminLTE 中如何使用 Vue 開發][1] 也是搞個半死。  
這次研究時上手了一點，其實概念和 [BootstrapVue: Quick Start][2] 文檔說明相同，以下為關鍵部分

```js
// Register BootstrapVue in your app entrypoint:
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue);
```

## 使用 Laravel Mix

1. 先透過 `npm install --save bootstrap-vue` 安裝相依套件
2. 修改專案目錄下的 `resources/asset/js/app.js`

    ```js
    require ('./bootstrap-vue') // 引入相依的 bootstrap-vue.js
    ```
3. 修改專案目錄下的 `webpack.mix.js`

   ```js
   // 在 vendor resources 的部分底下新增一行
   .copy('node_modules/bootstrap-vue/dist/bootstrap-vue.js','resources/assets/js');   
   ```

   > *Note*: 也可以手動將 `bootstrap-vue.js` cp 到 `resources/assets/js`，只要 app.js 能 require 到即可

[1]: http://www.evernote.com/l/APJdlLk0-ZhKVaznl7ZNmBXo19MINqKUAnM/ "Laravel-AdminLTE 中如何使用 Vue 開發"
[2]: https://bootstrap-vue.github.io/docs/setup/ "BootstrapVue: Quick Start"
