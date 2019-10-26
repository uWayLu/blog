---
title: Laravel 學習筆記（二）：Auth and Eloquent ORM
tags: ["web開發", "開發", "PHP", "Laravel", "posted"]
notebook: 15.Laravel
layout: post
---
# 從 Laravel 5 的 Auth 開始學習

本系列筆記跟隨 [johnlui/Learn-Laravel-5][2] 的教學脈絡；  
[2016 版 Laravel 系列入门教程（二）][3]
  
透過 PHP 5.4 Trait 特性所實現的 Auth 機制，可以應付輕量權限系統之需求。本篇用到的 sh 指令整理如下：
  
```sh
# Auth 系統，並 migrate 相對應的資料表
php artisan make:auth
php artisan migrate

# 學習 Eloquent，以生成 Article 為例
php artisan make:model Article
php artisan make:migration create_article_table
subl database/migrations/*_create_article_table.php
php artisan migrate # migrate 前須於對應的 database/migrations/*_create_article_table.php 中描述 up 時的 Schema; down 就隨便

php artisan make:seeder ArticleSeeder
subl database/migrations/ArtilceSeeder.php
subl database/migrations/DatabaseSeeder.php
composer dump-autoload
php artisan db:seed
```

## 設置 .env 開發環境
透過 `php artisan serve` 指令可以在 8000 port 啟動開發模式，開發模式所需要的參數如 DB 登入帳號密碼在 .env 中設置；  

## php artisan migrate
/database/migrations/*.php 的文件中，用 PHP 描述 database.table 構造，透過 php artisan migrate 一次性遷徙好已定義的資料庫結構。

> **Note**: Laravel 5.4 migrate 時可能會遇到報錯 `Syntax error or access violation: 1071 Specified key was too long; max key length is 767 bytes`, 
> [解決方法][1]是修改 /app/Providers/AppServiceProvider.php，如下

```php
use Illuminate\Support\Facades\Schema;
public function boot()
    {
        Schema::defaultStringLength(191);
    }
```

## 初學 Laravel Eloquent ORM
我的 sublime evernote 畫不出流程圖，先 pass  


[1]: http://stackoverflow.com/questions/23786359/laravel-migration-unique-key-is-too-long-even-if-specified "Laravel 5.4: Specified key was too long error, Laravel News"
[2]: https://github.com/johnlui/Learn-Laravel-5/ "2016 版 Laravel 系列入门教程"
[3]: https://github.com/johnlui/Learn-Laravel-5/issues/5 "2016 版 Laravel 系列入门教程（二）"

