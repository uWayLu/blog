---
title: HOST Laravel on byethost (abandoned)
notebook: 15.Laravel
tags: ["開發", "web開發", "PHP", "Laravel", "posted"]
layout: post
---

# 嘗試在 byethost 上運行 Laravel 開發的服務
幾乎成功了，最後還是放棄，特此紀錄。

## 遇到的問題  

1. 堆棧報錯 config 中的 key improperly
2. 欲實現 domain/ 即導向 laravel_proj/public/ ， `.htaccess` 我設置不好；
   能夠順利導向訪問 php 之 uri ，無法設置好 css, js 等相關目錄
3. 覺得非正規解 1.；`$_ENV['VAR_NAME']` 正常但無法 `getenv('VAR_NAME)')`
4. 發現相依套件 evernote-sdk 會 Class not found，但本機開發正常，不知道是不是 windows 開發環境，  
   composer 中的 --dev 本地設置路徑問題

所以我還是去研究 docker 與 free docker hosting 吧……

## 小記錄
1. Laravel 5 中是使用 env('VAR_NAME', default_value) 這個 helper 去取得 `$_ENV['VAR_NAME']` 值
2. 在 index.php 中 `$response->send();` 前插入 var_dump 可以測試 env 變數。
   
   ```php
   var_dump($_ENV);
   echo '<br>','<br>';
   var_dump(getenv('APP_ENV'));
   exit;
   ```

3. 關於 php `getenv()` 要讀 [PHP Manual](http://php.net/manual/en/function.getenv.php)；跟 `$_ENV` 一樣但似乎有大小寫之差異。

4. 不能改 virtual_host.conf 於是囫圇吞棗寫 .htaccess 時的參考資料  
   [重寫規則筆記](https://blog.hinablue.me/apache-note-about-some-rewrite-note-2011-05/)  
   [Apache htaccess 中的 RewriteCond 規則介紹](http://inspiregate.com/internet/host-setting/256-apache-htaccess-rules-introduced-in-rewritecond.html) 這篇有列出服務器變量  
   [Can you setup vistual hosts using only a .htaccess file?](https://www.sitepoint.com/community/t/can-you-setup-vistual-hosts-using-only-a-htaccess-file/72462)  
   a. [Where do you set the public directory in Laravel 5?](https://laracasts.com/discuss/channels/general-discussion/where-do-you-set-public-directory-laravel-5)

5. 相關資訊還有 [明明有 .env Laravel 卻抓不到值？原因是 `php artisan config:cache`](https://blog.tanteng.me/2016/12/laravel-env-null/)
