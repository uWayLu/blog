---
title: Configure-React-Native-Devlopment-Environment
date: 2018-08-12 20:02:58
tags: react-native javascript
---

# 從開發環境配置開始



## 需要安裝

+ npm / yarn

+ `yarn global add react-native-cli`

+ android studio  `yay -Syu android-studio`  [ archwiki: android ](https://wiki.archlinux.org/index.php/android)

  > 裝完再透過 androiod studio 安裝 platform 和 sdk 即可



## Hello World

+ [Android Studio 的 Hello World](https://hackmd.io/i46RuVAOT_aTD2JJcN9Egg)

  > Notice: react-native 0.56 requirement is = Android 4.1 (API 16) and >= iOS 9.0.

跑 `react-native run-andorid` 第一次會做編譯

###  Andorid Emulator

目前是直接用 android studio IDE 去開啟 react-native 專案下的 `app/src/main` 目錄
然後啟動 emulator

+ [单独启动android studio模拟器](https://blog.csdn.net/jinmie0193/article/details/81188507)

成功應該會看到以下畫面

{% asset_img 1534083308392.png react native hello world %}

### 直接拿實機 adb 測試似乎比較直覺...

## 參考資料

+ [React 中文網: 搭建开发环境](https://reactnative.cn/docs/getting-started.html)
+ [一看就懂的 React Native + Firebase Mobile App 入門教學](https://blog.techbridge.cc/2016/09/10/react-native-redux-android-firebase/)

> 接下來跟著這兩份資源繼續學習