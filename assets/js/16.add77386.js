(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{467:function(n,e,t){"use strict";t.r(e);var o=t(8),a=Object(o.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("p",[n._v("事因是這樣"),t("br"),n._v("\n大多數時間是在 Manjaro 17 上開發"),t("br"),n._v("\n因緣際會短期 work from home, 昨日使用 WSL1 + docker 開發後"),t("br"),n._v("\n疑似工作目錄權限有問題，造成 git 無法 stash/commit 等操作"),t("br"),n._v("\n(↑重開機就好了...)"),t("br"),n._v("\n亂搞的時候差點毀掉最新進度"),t("br"),n._v("\n所以還是想在習慣的開發環境工作！")]),n._v(" "),t("p",[n._v("紀錄一下，以後就可以複製貼上了 😂")]),n._v(" "),t("h2",{attrs:{id:"製作-usb-開機-安裝碟-多系統"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#製作-usb-開機-安裝碟-多系統"}},[n._v("#")]),n._v(" 製作 USB 開機/安裝碟 (多系統)")]),n._v(" "),t("p",[n._v("之前用最多的應該是直接 dd 或 Rufus"),t("br"),n._v("\n這次用 "),t("a",{attrs:{href:"http://www.winsetupfromusb.com/downloads/",target:"_blank",rel:"noopener noreferrer"}},[n._v("WinSetupFromUSB"),t("OutboundLink")],1),n._v("，可以直接建一支多系統的 USB 碟"),t("br"),n._v("\n建立完可以跑模擬開機直接看")]),n._v(" "),t("h2",{attrs:{id:"安裝後"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安裝後"}},[n._v("#")]),n._v(" 安裝後")]),n._v(" "),t("ul",[t("li",[t("p",[n._v("Input Method: ibus "),t("a",{attrs:{href:"https://uwaylu.gitbooks.io/my-knowledge-note/content/linux/manjaro17_input_method.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("抄自己筆記"),t("OutboundLink")],1)]),n._v(" "),t("p",[n._v("如果遇到部份應用無法輸入中文，偏好設定中取消"),t("strong",[n._v("內嵌預先編輯文字")]),t("br"),n._v("\n但較切換中英後還是有機會故障！")]),n._v(" "),t("p",[n._v("如果還有其他問題，再玩玩看小企鵝輸入法吧"),t("br"),n._v("\n輸入過快的 bug 似乎有解了，看"),t("a",{attrs:{href:"https://gist.github.com/tanyuan/c0d4ee15cf0c9c93da28cc1cf0ff87b3",target:"_blank",rel:"noopener noreferrer"}},[n._v("這裡"),t("OutboundLink")],1)])]),n._v(" "),t("li",[t("p",[n._v("Configure plasma (MAC-like)")]),n._v(" "),t("p",[t("strong",[n._v("找一個版本相近的來參考")]),n._v(" 😂")]),n._v(" "),t("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/kotYskfykl0",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),n._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/psifidotos/Latte-Dock/wiki/F.A.Q.#q-can-i-use-my-super-key-to-open-the-app-launcher",target:"_blank",rel:"noopener noreferrer"}},[n._v("latte 的 meta 1 ~ 9 失效解決方法"),t("OutboundLink")],1),t("br"),n._v("\n上述方法會導致無法 meta 鍵開啟應用程式選單，所以再調整 kwinrc")]),n._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# ~/.config/kwinrc")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("[")]),n._v("ModifierOnlyShortcuts"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("]")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[n._v("Meta")]),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v("org.kde.plasmashell,/PlasmaShell,org.kde.PlasmaShell,activateLauncherMenu\n")])])])]),n._v(" "),t("li",[t("p",[n._v("Configure Keyboad Shortcuts")])]),n._v(" "),t("li",[t("p",[n._v("Wine")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("# install\nyay -Syu wine winetricks\n# install fonts\nyay -S noto-fonts-cjk\n")])])]),t("p",[t("strong",[n._v("建立以下登錄檔")])]),n._v(" "),t("div",{staticClass:"language-regedit extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('# $HOME/.wine/zh.reg\nREGEDIT4\n[HKEY_LOCAL_MACHINE\\Software\\Microsoft\\Windows NT\\CurrentVersion\\FontLink]\n"FontLinkControl"=dword:00004000\n"FontLinkDefaultChar"=dword:00003000\n/* 替換字型1 */\n/* 安裝Wine不會提供字型，所以需要替換字型，我以Noto Sans CJK TC Medium替換 */\n/* 取代字型 */\n/* Wine 1.1.12 打補丁後也會有亂碼，所以要修改這裡 */\n/* Wine 1.1.12 之前可以不用修改，改了應該也沒關係 */\n[HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\FontLink\\SystemLink]\n"Microsoft Sans Serif"="NotoSansCJK-Medium.ttc,Noto Sans CJK TC Medium"\n"SimSun"="NotoSansCJK-Medium.ttc,Noto Sans CJK TC Medium"\n"Tahoma"="NotoSansCJK-Medium.ttc,Noto Sans CJK TC Medium"\n"PMingLiU"="NotoSansCJK-Medium.ttc,Noto Sans CJK TC Medium"\n[HKEY_LOCAL_MACHINE\\Software\\Microsoft\\Windows NT\\CurrentVersion\\FontSubstitutes]\n"Arial Baltic,186"="Noto Sans CJK TC Medium,186"\n"Arial CE,238"="Noto Sans CJK TC Medium,238"\n"Arial CYR,204"="Noto Sans CJK TC Medium,204"\n"Arial Greek,161"="Noto Sans CJK TC Medium,161"\n"Arial TUR,162"="Noto Sans CJK TC Medium,162"\n"Courier New Baltic,186"="Noto Sans CJK TC Medium,186"\n"Courier New CE,238"="Noto Sans CJK TC Medium,238"\n"Courier New CYR,204"="Noto Sans CJK TC Medium,204"\n"Courier New Greek,161"="Noto Sans CJK TC Medium,161"\n"Courier New TUR,162"="Noto Sans CJK TC Medium,162"\n"Helv"="Noto Sans CJK TC Medium"\n"Helvetica"="Noto Sans CJK TC Medium"\n"MS Shell Dlg"="Noto Sans CJK TC Medium"\n"MS Shell Dlg 2"="Noto Sans CJK TC Medium"\n"PMingLiU"="Noto Sans CJK TC Medium"\n"新細明體"="Noto Sans CJK TC Medium"\n"Tahoma"="Noto Sans CJK TC Medium"\n"Times"="Noto Sans CJK TC Medium"\n"Times New Roman Baltic,186"="Noto Sans CJK TC Medium,186"\n"Times New Roman CE,238"="Noto Sans CJK TC Medium,238"\n"Times New Roman CYR,204"="Noto Sans CJK TC Medium,204"\n"Times New Roman Greek,161"="Noto Sans CJK TC Medium,161"\n"Times New Roman TUR,162"="Noto Sans CJK TC Medium,162"\n"Tms Rmn"="Noto Sans CJK TC Medium"\n\n"Lucida Sans Unicode"="NotoSansCJK-Medium.ttc,Noto Sans CJK TC Medium"\n/* 平滑化(anti-alias) */\n/* 如果覺得開了之後字體難看，把三個Y改成N */\n[HKEY_CURRENT_USER\\Software\\Wine\\X11 Driver]\n"ClientSideAntiAliasWithCore"="N"\n"ClientSideAntiAliasWithRender"="N"\n"ClientSideWithRender"="N"\n\n/* 替換字型2 */\n[HKEY_CURRENT_USER\\Software\\Wine\\Fonts\\Replacements]\n@="Noto Sans CJK TC Medium"\n"Arial"="Noto Sans CJK TC Medium"\n"Fixedsys"="Noto Sans CJK TC Medium"\n"Microsoft Sans Serif"="Noto Sans CJK TC Medium"\n"MingLiU"="Noto Sans CJK TC Medium"\n"MS UI Gothic"="Noto Sans CJK TC Medium"\n"PMingLiU"="Noto Sans CJK TC Medium"\n"Simsun"="Noto Sans CJK TC Medium"\n"Songti"="Noto Sans CJK TC Medium"\n"System"="Noto Sans CJK TC Medium"\n"Tahoma"="Noto Sans CJK TC Medium"\n')])])]),t("p",[t("strong",[n._v("winetricks")]),t("br"),n._v("\n建立預設容器"),t("br"),n._v("\n環境設定為 win10")])]),n._v(" "),t("li",[t("p",[n._v("Naver Line")]),n._v(" "),t("p",[t("strong",[n._v("winetricks")]),t("br"),n._v("\n安裝 vcrun2008"),t("br"),n._v("\n安裝 line")])]),n._v(" "),t("li",[t("p",[n._v("Docker")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("yay -S docker\nsudo systemctl start docker.service\nsudo gpasswd -a $USER docker\nnewgrp docker\ndocker run hello-world\n")])])])]),n._v(" "),t("li",[t("p",[n._v("Openvpn client\nvpn metric 比較小的情況")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("nmcli connection\nnmcli connection edit ${CONN_NAME}\nnmcli> set ipv4.route-metric 300\nnmcli> save\nnmcli> quit\nnmcli connection up ${CONN_NAME}\n")])])])])]),n._v(" "),t("h2",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[n._v("#")]),n._v(" References")]),n._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://askubuntu.com/questions/246886/how-do-i-open-the-application-launcher-on-kde-with-just-the-meta-windows-key",target:"_blank",rel:"noopener noreferrer"}},[n._v("How do I open the Application Launcher on KDE with just the meta (“Windows”) key?"),t("OutboundLink")],1)]),n._v(" "),t("li",[t("a",{attrs:{href:"http://einverne.github.io/post/2019/08/linux-input-method-fcitx-ibus.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("Linux 下的输入法 fcitx vs ibus"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=a.exports}}]);