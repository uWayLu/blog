---
title: "NoMachine: Connect to linux with GUI"
date: 2020-09-01
updated: 2020-09-01 01:00
tags:
  - NoMachine
  - NX
  - Manjaro
  - Headless
  - Monitor
  - Linux
summary: 這是一個關於 NoMachine Server 沒有實體 Monitor 的故事。
---

## 問題

+ 無法調整解析度
  > 因為沒有實體顯示器，套用[預設設定][nx-server-create-display] 800x600
+ 卡成狗
+ 如果強迫建立新的 Session, Client 連線後出現錯誤訊息

## 解決方法

+ [ ] ~~[How to run a virtual desktop environment on Linux different from the default one with NoMachine](https://www.nomachine.com/AR04K00667)~~
  > 沒有用，本來 DefaultDesktopCommand 就已經預先設置正確
+ [x] [Add Fake Display when No Monitor is Plugged In][add-fake-display-when-no-monitor]

  新增一個 FHD 的虛擬顯示器  
  [dummy-1920-1080.conf](https://techoverflow.net/2019/02/23/how-to-run-x-server-using-xserver-xorg-video-dummy-driver-on-ubuntu/)

  ```sh
  # /etc/X11/xorg.conf
  Section "Monitor"
    Identifier "Monitor0"
    HorizSync 28.0-80.0
    VertRefresh 48.0-75.0
    # https://arachnoid.com/modelines/
    # 1920x1080 @ 60.00 Hz (GTF) hsync: 67.08 kHz; pclk: 172.80 MHz
    Modeline "1920x1080_60.00" 172.80 1920 2040 2248 2576 1080 1081 1084 1118 -HSync +Vsync
  EndSection

  Section "Device"
    Identifier "Card0"
    Driver "dummy"
    VideoRam 256000
  EndSection

  Section "Screen"
    DefaultDepth 24
    Identifier "Screen0"
    Device "Card0"
    Monitor "Monitor0"
    SubSection "Display"
      Depth 24
      Modes "1920x1080_60.00"
    EndSubSection
  EndSection
  ```

## ref

+ [Arch Wiki: NoMachine](https://wiki.archlinux.org/index.php/NoMachine)
+ [NX Server Create Display Config][nx-server-create-display]
+ [Resizing of a headless session](https://forums.nomachine.com/topic/resizing-of-a-headless-session)

<!-- ref -->
[nx-server-create-display]: https://www.nomachine.com/FR10L02842 "Giving the possibility to connect a physical session in NoMachine free version when the local X server can't be found"
[add-fake-display-when-no-monitor]: https://askubuntu.com/questions/453109/add-fake-display-when-no-monitor-is-plugged-in "Add Fake Display when No Monitor is Plugged In"