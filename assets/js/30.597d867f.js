(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{499:function(e,a,t){"use strict";t.r(a);var r=t(8),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"laravel-adminlte-中如何使用-vue-開發"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#laravel-adminlte-中如何使用-vue-開發"}},[e._v("#")]),e._v(" Laravel-AdminLTE 中如何使用 Vue 開發")]),e._v(" "),t("ol",[t("li",[e._v("page source 反查出 app.js")]),e._v(" "),t("li",[e._v("於 Vue 虛擬 DOM 中新增測試訊息並顯示")])]),e._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// public/js/app.js")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" app "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Vue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  el"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'#app'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  data"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    message"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Hello, World! 20170506 added; webpack test.'")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[e._v("此 app.js 為打包出來的檔案；故配置前端開發環境，從塊源碼開發")]),e._v(" "),t("li",[e._v("詳細的"),t("a",{attrs:{href:"http://laravelacademy.org/post/6798.html",title:"[ Laravel 5.4 文档 ] 前端 —— 编译资源（Laravel Mix）",target:"_blank",rel:"noopener noreferrer"}},[e._v("解惑文件"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"laravel-project-中配置前端開發環境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#laravel-project-中配置前端開發環境"}},[e._v("#")]),e._v(" Laravel project 中配置前端開發環境")]),e._v(" "),t("p",[e._v("Laravel 5.4+ 後有 Laravel Mix，能夠定義 webpack 的 compile script.")]),e._v(" "),t("ol",[t("li",[e._v("如果 new project 時沒有還原相依的 node_modules，須作 "),t("code",[e._v("npm install")])]),e._v(" "),t("li",[e._v("透過 Mix 執行 webpack compile； "),t("code",[e._v("npm run dev")]),e._v(" | "),t("code",[e._v("npm run production")])]),e._v(" "),t("li",[e._v("開發時可執行 "),t("code",[e._v("npm run watch")]),e._v(" ，監聽到修改時自動編譯文件")])]),e._v(" "),t("h2",{attrs:{id:"windows-下-npm-run-可能會遇到的錯誤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows-下-npm-run-可能會遇到的錯誤"}},[e._v("#")]),e._v(" Windows 下 npm run 可能會遇到的錯誤")]),e._v(" "),t("ol",[t("li",[e._v("node-sass 找不到路徑之錯誤，透過 "),t("code",[e._v("npm rebuild node-sass")]),e._v(" 修復；見"),t("a",{attrs:{href:"http://stackoverflow.com/questions/39173020/laravel-elixir-sass-error",title:"Laravel elixir Sass error",target:"_blank",rel:"noopener noreferrer"}},[e._v("Stackflow: Laravel elixir Sass error"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("(adminLTE) /img/boxed-bg.jpg 之相關報錯，在 "),t("code",[e._v("webpack.mix.js")]),e._v(" 中新增 "),t("code",[e._v("mix.options({ processCssUrls: false });")]),e._v("；\n見"),t("a",{attrs:{href:"https://github.com/almasaeed2010/AdminLTE/issues/1360",title:"Dependencies error with new laravel (5.4) webpack.",target:"_blank",rel:"noopener noreferrer"}},[e._v("AdminLTE on Github: Dependencies error with new laravel (5.4) webpack."),t("OutboundLink")],1)]),e._v(" "),t("li",[t("code",[e._v("npm install cross-env --save-dev")]),e._v(" ；"),t("a",{attrs:{href:"https://segmentfault.com/a/1190000005811347",title:"使用cross-env解决跨平台设置NODE_ENV的问题",target:"_blank",rel:"noopener noreferrer"}},[e._v("使用cross-env解决跨平台设置NODE_ENV的问题"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=s.exports}}]);