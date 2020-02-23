---
title: Laravel 學習筆記（一）：安裝與設置
tags: ["web開發", "開發", "PHP", "Laravel", "posted"]
notebook: 15.Laravel
layout: post
---

本系列筆記跟隨 [johnlui/Learn-Laravel-5][3] 的教學脈絡；
[2016 版 Laravel 系列入门教程（一）][4]

說要學 Laravel 說好久，前前後後斷斷續續也裝了三四次，
這次要設置環境看著 Manual 還是要花點時間思考，看來還是老實作筆記實在。

之前曾經使用過 composer 安裝、以 git clone 方式安裝[基於Laravel 的 CMS: OctoberCMS][1]。

> **Note:** 從 Github clone 的專案大部分都要補檔案才能執行，缺失檔案見專案內的 .gitignore,
> + Laravel 專案 composer install 一下，透過 composer.json 還原相依檔案
> + 如果遇到 APP_KEY 相關報錯，可能是缺少 APP_KEY。透過 php artisan key:generate 產生 APP_KEY，
>   缺哪補哪，一個蘿蔔一個坑的補上即可。
> + 在此篇文章[如何重建由GitHub下載的Laravel專案?][2]可以看到更詳細的敘述

## 安裝和設置

**1.** 使用 composer 安裝

```sh
composer create-project --prefer-dist laravel/laravel dirname
```

**2.** 設定 appache 的 vhost.conf，直接將 domain 導到網站根目錄下的 web 應用資料夾  
**3.** 設定 config 中的 app.php
> **Note:** 非必要；將時區設定成 'Asia/Taipei'；  
> 開發環境 ENV 及 debug error 可以透過 .env 開發時變更  

**4.** 設定 config 中的 database.php  
> **Note:** 設定 'mysql' 設定值即可，除非要使用其他類型的資料庫  

**5.** 設定 git，透過 git 來作版本控制（雖然我都推得亂七八糟的）  
  
```sh  
git init  
git remote add origin https://github.com/uWayLu/webblara.git  
git add .  
git commit -m "initial commit"  
git push --set-upstream origin master
```
  
> 創建了 subl-proj 資料夾管理 sublime project  
> .gitignore 增加兩個要排除的資料夾: /config 和 /subl-proj  
> 第一次 --set-upstream 後，之後只要 git push 就可以推到遠端庫囉

## 參考資料
+ [LARAVEL 學習筆記 LESSON 2](http://blog.fukuball.com/laravel-xue-xi-bi-ji-lesson-2/)
+ [LARAVEL 台灣 docs 5.3](https://laravel.tw/docs/5.3/configuration)
+ [如何重建由GitHub下載的Laravel專案?](http://oomusou.io/laravel/laravel-clone-from-github/)

<!-- 以下註解連結 -->

[1]: https://octobercms.com/ "OcterberCMS"
[2]: http://oomusou.io/laravel/laravel-clone-from-github/ "如何重建由GitHub下載的Laravel專案?"
[3]: https://github.com/johnlui/Learn-Laravel-5/ "2016 版 Laravel 系列入门教程"
[4]: https://github.com/johnlui/Learn-Laravel-5/issues/4 "2016 版 Laravel 系列入门教程（一）"
