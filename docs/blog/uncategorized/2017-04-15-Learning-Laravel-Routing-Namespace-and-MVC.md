---
title: Laravel 學習筆記（三）：Routing, Namespace, and MVC
tags: ["web開發", "開發", "PHP", "Laravel", "posted"]
notebook: 15.Laravel
layout: post
---

# 學習 Laravel 的 routes 與 MVC

本系列筆記跟隨 [johnlui/Learn-Laravel-5][5] 的教學脈絡；  
[2016 版 Laravel 系列入门教程（三）][6]

所有 PHP 框架的核心路由系統，定義訪問 URL 所映射的 MVC code 片段。

## 路由
閱讀 [Laravel 5.4 Routing 官方文檔][1]。  
  
> **Note**: 5.3+ 版本的路由檔案規劃和舊版本不同，新版異動後的路由設置在 yourLaravelApp/routes/下，並預先規劃好四種不同用途的 routes。  

### 閉包( Closure ) 路由
code 有一種 js 感；直接閉包 function 內解決簡單操作。範例如下：  

```js
Route::get('/phpinfo', function() {
    return phpinfo();
});
```

### 一般路由：映射至對應的控制器
有一種 restful 感，對同樣 url 根據不同的 request 返回相對應的 reply。

```js
Route::get('/home', 'HomeController@index');
Route::post('/home', 'HomeController@function_for_post_request');
```

小彩蛋討論串：[这个laravel路由怎么写?][4]

## 命名空間
閱讀大神的科普文 [PHP 命名空间 解惑][2]。  
  
1. namespace 和 path/to/dir/file.* 並無關係；抽象的邏輯資料夾概念。  
2. 必須在 PHP 程式宣告後第一行 `<?php ` 後定義命名空間；反正放錯位置就會報錯，錯幾次就熟了QQ。  
3. `use \name\space as namespace_alias` 可以指定 alias name，此例中未指定預設 Class name 為 space。  
4. 可以透過命名空間調用其它 Class 的靜態方法。  
    
> **Note**: 在第 1 點提到 namespace 與實際 path 並無關係，為了方便會與實際文件系統路徑一致。[PSR-4 命名空間規範 CN][3]

### Extra: PHP 運行流程
摘錄自 [PHP 命名空间 解惑][2]。
> #### PHP 运行流程 
> 在一个典型的 Apache +  mod_php 架构的 PHP 运行环境中，一个 PHP 网站是这样运行的：  
>   
> 1. Apache 收到用户的 HTTP 请求  
> 2. 这个请求是以 .php 结尾或者是一个不存在的路径（.htaccess 会将其转发到 index.php）  
> 3. Apache 的 mod_php 会启动一个新的 PHP 进程（PHP 解释器），读取 HTTP 请求的 URL 中的那个 .php 文件或者 index.php  
> 4. 被读取进 PHP 解释器的字符串被按照 PHP 的语法进行解析。为了方便理解，我们将这些经过解析的字符串所生成的 context（上下文）命名为 Matrix  
> 5. 然后 PHP 解释器会根据从 Matrix 中解析出的特定 PHP 语句（如 require）载入其他 PHP 文件，并将其内容以字符串的形式加入 Matrix  
> 6. 最终 Matrix 变成一个数万行代码的巨型上下文（为了便于理解可以想象成巨长的代码文件字符串），PHP 解释器会按照 PHP 语法执行 Matrix，进行数据库连接、网络请求、文件读写等操作  
> 7. 每一次的 echo 都会被写入到输出缓冲区，最终这个巨长的代码字符串被执行完毕，PHP 进程退出内存  
> 8. 缓冲区中就是要发给用户的 HTTP response，其实就是一堆字符串，只不过它遵守 HTML 规范，可以被浏览器解析。这一堆字符串被 Apache 发送回用户的浏览器，浏览器渲染，用户看到内容

[1]: https://laravel.com/docs/5.4/routing "Laravel 5.4 Docs: Routing"
[2]: https://lvwenhan.com/php/401.html "PHP 命名空间 解惑"
[3]: https://github.com/PizzaLiu/PHP-FIG "PHP编码规范（中文版）导读"
[4]: https://www.zhihu.com/question/31330386/answer/51544599 "这个laravel路由怎么写?"
[5]: https://github.com/johnlui/Learn-Laravel-5/ "2016 版 Laravel 系列入门教程"
[6]: https://github.com/johnlui/Learn-Laravel-5/issues/6 "2016 版 Laravel 系列入门教程（三）"

