---
title: Configure My Aria2
date: 2018-08-13 21:44:14
tags: aria2 downloader magnet bitconnect,
location: Kaohsiung, Taiwan
---

# 配置 Aria2 的設定

cli 使用方式很直覺，就是 `aria2c source_url` 然後支援幾種參數

`aria2c https://uwaylu.github.io`

`aria2c -x2 https://uwaylu.github.io` 2 connections

`aria2c https://uwaylu.github.io https://uwaylu2.github.io` from 2 host

`aria2c -i uris.txt` download URIs found in text file

偏好設定像是下載路徑，每次使用幾個連接等，
當然就是寫在 config 中記起來啦

## Configuration

- path: `~/.aria2/aria2.conf`
- command: `aria2c --conf-path=<path>`

RPC 一定要打開，預設是走 6800 port 並且非加密 http

其實最詳細的官方文件，只是 RTFM 覺得心累...

## 參考資料

- [aria2 Official](https://aria2.github.io/)

- [binux 的 aria2 配置示例](https://binux.blog/2012/12/aria2-examples/)

  > binux 自己也寫了一個 aria2 的 webui 叫 YAAW，
  > star 數也滿高的，約是 aria2 webui 的 1/3
  > 有興趣可以試試看

- [Aria2 基础上手指南](https://zhuanlan.zhihu.com/p/30666881)

  > 這篇是寫得很詳細的

- [configure file example](http://aria2c.com/usage.html)

- [Archlinux wiki: Aria2](https://wiki.archlinux.org/index.php/aria2)

  > 後來才發現 ArchWiki 有 aria2 資訊頁而且還滿有用的
  >
  > - seperate configuration to multiple file by download types,
  >   each config var has a corrsponding description
  > - AUR of ui
