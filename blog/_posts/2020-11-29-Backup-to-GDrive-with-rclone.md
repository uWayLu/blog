---
title: "(WIP): Backup to Google Drive with Rclone"
date: 2020-11-29
tags:
    - Linux
    - Rclone
    - Backup
    - Google Drive
    - Manjaro
    - WIP
---

## 描述

About [Rclone](https://rclone.org)
> Rclone is a command line program to manage files on cloud storage. It is a feature rich alternative to cloud vendors' web storage interfaces. Over 40 cloud storage products support rclone including S3 object stores, business & consumer file storage services, as well as standard transfer protocols.

+ [x] rclone 存取 google drive
+ [ ] rclone backup 到 gogole drive 的腳本
+ [ ] crontab 排程執行，並發送執行結果到 Discord

Arch install from AUR `yay clone`

### rclone 存取 google drive

+ [取得 client id](https://rclone.org/drive/#making-your-own-client-id)

```shell
rclone config
...
sudo mkdir ~/gdrive
rclone mount gd: /mnt/gdrive --allow-non-empty --vfs-cache-mode writes
df -h ~/gdrive
```
> 建立在家目錄下; 如果是多人使用電腦，有個 --allow-other-user 選項
> df 觀看硬碟用量，確認掛載成功

#### 自動掛載 with systemd

```shell
# /usr/lib/systemd/system/rclone.service
[Unit]
Description=rclone daemon
After=network.target
 
[Service]
User=ywl
ExecStart=/usr/bin/rclone mount gd: /home/ywl/gdrive --allow-non-empty --vfs-cache-mode writes
ExecStop=/usr/bin/fusermount -uz /home/ywl/gdrive
Restart=on-abort
 
[Install]
WantedBy=multi-user.target
```
@[gist](https://gist.github.com/uWayLu/9836d2f52fd980d92d64f6106690d1a2.js)

這個是只掛一個盤的使用，多個盤可以參考 [gmag11/rclone-mount@.service](https://gist.github.com/gmag11/dc139ffd6a8ca8b622e98ca6422f8d79)


## 小結

乖乖把鳥哥看一遍好嗎！

# References

+ [Rclone mount](https://rclone.org/commands/rclone_mount/)
+ [What does Restart=on-abort mean in a systemd service?
](https://unix.stackexchange.com/questions/564443/what-does-restart-on-abort-mean-in-a-systemd-service)
+ [rc.local vs upstart vs systemd [closed]](https://askubuntu.com/questions/922730/rc-local-vs-upstart-vs-systemd)
+ [鳥哥：第十七章、認識系統服務 (daemons)](http://linux.vbird.org/linux_basic/0560daemons.php)
+ [ArckWiki: systemd](https://wiki.archlinux.org/index.php/Systemd_(%E6%AD%A3%E9%AB%94%E4%B8%AD%E6%96%87))