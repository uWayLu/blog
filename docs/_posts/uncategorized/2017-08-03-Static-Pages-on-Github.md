---
title: Static Pages on Github
date: 2017-08-03
notebook: 13.個人網站
tags: ["jekyll", "posted"]
---

# Why I use Jekyll.

1. 筆記與靜態頁面很合適，更新頻率不高。
2. 可以與線上服務分離，以檔案形式(*.md)保存資料。

我嘗試過以下作法：

1. [Joomla! on OpenShift](https://php-keyboardsensou.rhcloud.com)
2. [WordPress on OpenShift](https://wp-keyboardsensou.rhcloud.com)
    > 1 和 2 真的是很懶得維護；還沒開始大量撰寫就擔心備份問題，過於完善的後台實在看了讓人頭痛；不想套樣式又不想自己刻，好吧就是懶！

3. Larvel 5.3 中透過 Evernote PHP SDK，透過開發者 API 取回自己的筆記資料
    > 原本打算透過 webhook 實現 IFTTT 順便學個 Vue，然而申請 Evernote API key 久久未回覆，後來 acitve 後一樣 OAuth2 認證無法成功，同時 Google 到相同問題官方也是放生，一直在 Open Issue 的狀態；退而求其次只用開發者 API 主動 polling （官方有 15 分鐘的限制），撈到資料在後台用 Vue 展示後就暫停碼，往上線的方向測試；  
    
    > 然而在進行將 Laravel 上線至 byethost 時遇到問題，所以收集資料後往 4 的方向走。


4. Google Blogger
    > 可以透過 Google blogger API 或者發送信件方式做 Post，不過後來為了與線上服務分離，就擁向 jekyll 的懷抱了。  
    > evernote + markdown + github.io

相關資訊：
1. [StaticGen: Top Open-Source Static Site Generators](https://www.staticgen.com/)
2. 以前申請過 Koding, 現在 Policy 也改變了，使用者付費囉！  
   只好摸摸鼻子繼續異機設定環境

## Requirements

1. Ruby

   > Windows 透過 [RubyInstaller](https://rubyinstaller.org/downloads/)  
   > CentOS 請搜索 rvm;  
   > ruby v2.4+ 可在 CLI 透過 ridk install 安裝開發工具；  
   > older version 需要抓 devkit

2. Python2
 
   > 需要 Python2 將 markdown 轉譯成 html

3. [jekyllrb.com](https://jekyllrb.com/docs/upgrading/2-to-3/)

   > `gem install jekyll bundler jekyll-paginate jekyll-gist pygments.rb redcarpet`

## Noticed
1. Jekyll 3 的 _config.yml 中，變數 gems 已棄用，請改用 plugins
2. Syntax Highlighter
   > As of v3.0 Jekyll now uses Rouge as the default syntax highlighter.  
   > Github only supports Rouge.
   
3. Markdown Processor
   > Jekyll v3.x uses kramdown as its default Markdown engine and Github only supports kramdown.

4. 其實在 _config.yml 中使用了不支援的插件，馬上就會收到 GitHub 寄來的通知信了 ˊ\_>ˋ

## Resume
+ [JSON Resume](https://jsonresume.org/)
  
  > **Noticed:** If you use branch except gh-pages in the project repo, the feature mapping `/` to `index.*` files does not work. 

## References
1. [[jekyll]我的第一個Github個人網站](http://mis101bird.js.org/jekyll_first_try/)
2. [JEKYLL初探](http://shyhornet.github.io/2015/10/18/第一篇文章/)
3. 分解 URI [Configuring Jekyll for User and Project GitHub Pages](http://downtothewire.io/2015/08/15/configuring-jekyll-for-user-and-project-github-pages/)
4. [How to Install Ruby 2.4.0 on CentOS/RHEL with RVM](https://tecadmin.net/install-ruby-2-4-centos-rvm/)
5. [GitHub Pages drops support for RDiscount, Redcarpet, and RedCloth (Textile) markup engines](https://github.com/blog/2151-github-pages-drops-support-for-rdiscount-redcarpet-and-redcloth-textile-markup-engines)
