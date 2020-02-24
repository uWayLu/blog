---
title: Laravel 學習筆記（四）：簡單的 blog 系統
date: 2017-04-16
tags: ["web開發", "開發", "PHP", "Laravel", "posted"]
notebook: 15.Laravel
---
# 構築一個簡單、帶後台管理的 blog 系統（文章新增、瀏覽、編輯、刪除）

本系列筆記跟隨 [johnlui/Learn-Laravel-5][1] 的教學脈絡；  
[2016 版 Laravel 系列入门教程（四）][2]

1. 路由規劃：訪問 'www.myhost/' 即可瀏覽網站首頁
2. 理解 laravel 的 views，其中 layouts 與 views 的關係可以為父子或無關係。
3. `php artisan make:controller Admin/HomeController` 生成後端的控制器文件
4. 路由增加 3. 對應的 url

    ```php
    // 在 routes 用 group 的觀念真的太神啦  
    Route::group(['middleware' => 'auth', 'namespace' => 'Admin', 'prefix' => 'admin'], function(){
      Route::get('/', 'HomeController@index');
    });
    ```
5. 在 3. 生成的控制器中編寫相對應的 index 方法與要呼叫的 view
6. 新增 view/admin/home.blade.php
7. 修改 Auth 系統登入後的跳轉目標。打開 pathToLaravelApp/app/Http/Controllers/Auth/LoginController.php  

    ```php
    protected $redirectTo = '/admin';
    ```
8. 訪問 'www.myhost/admin' 並登入測試
9. `php artisan make:controller Admin/ArticleController`
10. 於 ArticleController 新增 index 方法

    ```php
    public function index()
    {
        return view('admin/article/index')->withArticles(Article::all());
    }
    ```
11. 新增 article 管理用的 view component: admin/article/index.blade.php
12. 於 Admin/ArticleContorller 中 use App\Article 命名空間
13. [透過 restful controller 接受文章的 CRUD 請求](#laravel-restful-route)
將路由中 get 改成 resource 即可，如 `Route::resource('article', 'ArticleController');`
14. 在 Admine/ArticleContoller 中增加對應 Request 請求的各種方法
15. 建立 14. 各種方法對應的 Views
16. 偏頭痛穩定發作中，13 ~ 16 點看教學腦海整理吧

> **Note**: 在 Controller 中的 view('pathToView')->withArticles(Artilcle::all()),  
> 等價於 view('pathToView')->with('Articles', Article::all());
> 此舉會將查詢到的資料以 $articles 提供 給 view。

## Laravel 的 Views: blade 模板系統 / layouts / views
PathToLaravelApp\RESOURCES  
└─views  
    │  home.blade.php  
    │  welcome.blade.php  
    │  
    ├─auth  
    │  │  login.blade.php  
    │  │  register.blade.php  
    │  │  
    │  └─passwords  
    │          email.blade.php  
    │          reset.blade.php  
    │  
    └─layouts  
            app.blade.php  

blade 模板系統中，  

```php
# views/home.blade.php 中
1. @extends('layouts.app') # 表示此 view 隸屬於 layouts/app.blade.php
2. @section('content') ... @endsection # section 之間的內容會在該隸屬 layouts 下輸出

# layouts/app.blade.php
3. @yield('content') # 輸出 2. 中要輸出的內容
```

<a name="laravel-restful-route"></a>  
## Laravel 提供了 Restful Resources Controller  

| Verb      | URI                  | Action  | Route Name     |
|:----------|:---------------------|:--------|:---------------|
| GET       | /photos              | index   | photos.index   |
| GET       | /photos/create       | create  | photos.create  |
| POST      | /photos              | store   | photos.store   |
| GET       | /photos/{photo}      | show    | photos.show    |
| GET       | /photos/{photo}/edit | edit    | photos.edit    |
| PUT/PATCH | /photos/{photo}      | update  | photos.update  |
| DELETE    | /photos/{photo}      | destroy | photos.destroy |
  

[1]: https://github.com/johnlui/Learn-Laravel-5/ "2016 版 Laravel 系列入门教程"
[2]: https://github.com/johnlui/Learn-Laravel-5/issues/7 "2016 版 Laravel 系列入门教程（四）"

