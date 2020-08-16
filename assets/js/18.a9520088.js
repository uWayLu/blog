(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{470:function(a,t,e){"use strict";e.r(t);var s=e(8),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"從-laravel-5-的-auth-開始學習"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#從-laravel-5-的-auth-開始學習"}},[a._v("#")]),a._v(" 從 Laravel 5 的 Auth 開始學習")]),a._v(" "),e("p",[a._v("本系列筆記跟隨 "),e("a",{attrs:{href:"https://github.com/johnlui/Learn-Laravel-5/",title:"2016 版 Laravel 系列入门教程",target:"_blank",rel:"noopener noreferrer"}},[a._v("johnlui/Learn-Laravel-5"),e("OutboundLink")],1),a._v(" 的教學脈絡；"),e("br"),a._v(" "),e("a",{attrs:{href:"https://github.com/johnlui/Learn-Laravel-5/issues/5",title:"2016 版 Laravel 系列入门教程（二）",target:"_blank",rel:"noopener noreferrer"}},[a._v("2016 版 Laravel 系列入门教程（二）"),e("OutboundLink")],1)]),a._v(" "),e("p",[a._v("透過 PHP 5.4 Trait 特性所實現的 Auth 機制，可以應付輕量權限系統之需求。本篇用到的 sh 指令整理如下：")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Auth 系統，並 migrate 相對應的資料表")]),a._v("\nphp artisan make:auth\nphp artisan migrate\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 學習 Eloquent，以生成 Article 為例")]),a._v("\nphp artisan make:model Article\nphp artisan make:migration create_article_table\nsubl database/migrations/*_create_article_table.php\nphp artisan migrate "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# migrate 前須於對應的 database/migrations/*_create_article_table.php 中描述 up 時的 Schema; down 就隨便")]),a._v("\n\nphp artisan make:seeder ArticleSeeder\nsubl database/migrations/ArtilceSeeder.php\nsubl database/migrations/DatabaseSeeder.php\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("composer")]),a._v(" dump-autoload\nphp artisan db:seed\n")])])]),e("h2",{attrs:{id:"設置-env-開發環境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#設置-env-開發環境"}},[a._v("#")]),a._v(" 設置 .env 開發環境")]),a._v(" "),e("p",[a._v("透過 "),e("code",[a._v("php artisan serve")]),a._v(" 指令可以在 8000 port 啟動開發模式，開發模式所需要的參數如 DB 登入帳號密碼在 .env 中設置；")]),a._v(" "),e("h2",{attrs:{id:"php-artisan-migrate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#php-artisan-migrate"}},[a._v("#")]),a._v(" php artisan migrate")]),a._v(" "),e("p",[a._v("/database/migrations/*.php 的文件中，用 PHP 描述 database.table 構造，透過 php artisan migrate 一次性遷徙好已定義的資料庫結構。")]),a._v(" "),e("blockquote",[e("p",[e("strong",[a._v("Note")]),a._v(": Laravel 5.4 migrate 時可能會遇到報錯 "),e("code",[a._v("Syntax error or access violation: 1071 Specified key was too long; max key length is 767 bytes")]),a._v(",\n"),e("a",{attrs:{href:"http://stackoverflow.com/questions/23786359/laravel-migration-unique-key-is-too-long-even-if-specified",title:"Laravel 5.4: Specified key was too long error, Laravel News",target:"_blank",rel:"noopener noreferrer"}},[a._v("解決方法"),e("OutboundLink")],1),a._v("是修改 /app/Providers/AppServiceProvider.php，如下")])]),a._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("use")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[a._v("Illuminate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Support"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Facades"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Schema")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("boot")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        Schema"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("defaultStringLength")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("191")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("h2",{attrs:{id:"初學-laravel-eloquent-orm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初學-laravel-eloquent-orm"}},[a._v("#")]),a._v(" 初學 Laravel Eloquent ORM")]),a._v(" "),e("p",[a._v("我的 sublime evernote 畫不出流程圖，先 pass")])])}),[],!1,null,null,null);t.default=r.exports}}]);