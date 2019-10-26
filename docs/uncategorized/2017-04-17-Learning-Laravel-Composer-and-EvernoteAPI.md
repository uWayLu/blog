---
title: Laravel 學習筆記（五）：Composer 與 Evernote API
tags: ["PHP", "web開發", "開發", "Laravel", "posted"]
notebook: 15.Laravel
layout: post
---

# Composer 與 Evenoter API

[Composer 官方中文說明文檔][1]。  
  
為了實行透過做自動 post 文章的想法，首先要學會使用 Evenote 的 API。  
Evernote 有提供 SDK for PHP [evernote-cloud-sdk-php on Github][2]，可以透過 composer 安裝，
  
那麼，問題來了，相依套件衝突時就無法安裝，除錯囉 QQ

## Composer
1. `composer require 套件名稱 版本`
2. 透過 composer.json 可以管理相依套件，理所當然能做 laravel 降級
3. Laravel 5.4 和 5.3 有 defaultStringLength 的錯誤問題。
4. 降級後框架報錯，`BadMethodCallException in Macroable.php line 74: Method prefix does not exist.`  
打開對應文件後推測，應該是 v5.4 時使用 make:auth 產生的 Auth，相依於這個 Trait。  
~~BUG 就不除了，估計直接 new 個 v5.3 的專案比較快。~~  
已透過 `git checkout . && git clean -xdf` 還原為 5.4。

    > ***Questions***:
    > 1. Composer 如何實現套件安裝後的管理？
    > 2. 如 1, Composer 與 autoload 的關係？或者是 iif？

## Evernote API 2.0
1. 與 Laravel 5.4 的相依套件 nikic/php-parser 衝突
2. 與 Laravel 5.4 的相依套件 css-to-inline-styles 版本不符合
3. 計劃直接用 5.3 的框架搭配 [laravel-notification-channels on Github][3]

> webhooks 的概念尚未研究，猜測應該是
> 1. APP 透過 API tokens 與 Evernote 綁定
> 2. 當 Evenote 上該 tokens 所屬內容有異動時，會發送 notications 告知綁定的 APP
> 3. APP 透過 API 可取得異動後的內容。

[1]: https://getcomposer.ycnets.com/doc/03-cli.md "Composer 官方中文說明文檔"
[2]: https://github.com/evernote/evernote-cloud-sdk-php "Evernote Cloud SDK for PHP"
[3]: https://github.com/laravel-notification-channels/evernote "Evernote notifications channel for Laravel 5.3"

