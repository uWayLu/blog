(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{359:function(e,r,t){"use strict";t.r(r);var o=t(9),n=Object(o.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"why-i-use-jekyll"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#why-i-use-jekyll"}},[e._v("#")]),e._v(" Why I use Jekyll.")]),e._v(" "),t("ol",[t("li",[e._v("筆記與靜態頁面很合適，更新頻率不高。")]),e._v(" "),t("li",[e._v("可以與線上服務分離，以檔案形式(*.md)保存資料。")])]),e._v(" "),t("p",[e._v("我嘗試過以下作法：")]),e._v(" "),t("ol",[t("li",[t("p",[t("a",{attrs:{href:"https://php-keyboardsensou.rhcloud.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Joomla! on OpenShift"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://wp-keyboardsensou.rhcloud.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("WordPress on OpenShift"),t("OutboundLink")],1)]),e._v(" "),t("blockquote",[t("p",[e._v("1 和 2 真的是很懶得維護；還沒開始大量撰寫就擔心備份問題，過於完善的後台實在看了讓人頭痛；不想套樣式又不想自己刻，好吧就是懶！")])])]),e._v(" "),t("li",[t("p",[e._v("Larvel 5.3 中透過 Evernote PHP SDK，透過開發者 API 取回自己的筆記資料")]),e._v(" "),t("blockquote",[t("p",[e._v("原本打算透過 webhook 實現 IFTTT 順便學個 Vue，然而申請 Evernote API key 久久未回覆，後來 acitve 後一樣 OAuth2 認證無法成功，同時 Google 到相同問題官方也是放生，一直在 Open Issue 的狀態；退而求其次只用開發者 API 主動 polling （官方有 15 分鐘的限制），撈到資料在後台用 Vue 展示後就暫停碼，往上線的方向測試；")])]),e._v(" "),t("blockquote",[t("p",[e._v("然而在進行將 Laravel 上線至 byethost 時遇到問題，所以收集資料後往 4 的方向走。")])])]),e._v(" "),t("li",[t("p",[e._v("Google Blogger")]),e._v(" "),t("blockquote",[t("p",[e._v("可以透過 Google blogger API 或者發送信件方式做 Post，不過後來為了與線上服務分離，就擁向 jekyll 的懷抱了。"),t("br"),e._v("\nevernote + markdown + github.io")])])])]),e._v(" "),t("p",[e._v("相關資訊：")]),e._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"https://www.staticgen.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("StaticGen: Top Open-Source Static Site Generators"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("以前申請過 Koding, 現在 Policy 也改變了，使用者付費囉！"),t("br"),e._v("\n只好摸摸鼻子繼續異機設定環境")])]),e._v(" "),t("h2",{attrs:{id:"requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Ruby")]),e._v(" "),t("blockquote",[t("p",[e._v("Windows 透過 "),t("a",{attrs:{href:"https://rubyinstaller.org/downloads/",target:"_blank",rel:"noopener noreferrer"}},[e._v("RubyInstaller"),t("OutboundLink")],1),t("br"),e._v("\nCentOS 請搜索 rvm;"),t("br"),e._v("\nruby v2.4+ 可在 CLI 透過 ridk install 安裝開發工具；"),t("br"),e._v("\nolder version 需要抓 devkit")])])]),e._v(" "),t("li",[t("p",[e._v("Python2")]),e._v(" "),t("blockquote",[t("p",[e._v("需要 Python2 將 markdown 轉譯成 html")])])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jekyllrb.com/docs/upgrading/2-to-3/",target:"_blank",rel:"noopener noreferrer"}},[e._v("jekyllrb.com"),t("OutboundLink")],1)]),e._v(" "),t("blockquote",[t("p",[t("code",[e._v("gem install jekyll bundler jekyll-paginate jekyll-gist pygments.rb redcarpet")])])])])]),e._v(" "),t("h2",{attrs:{id:"noticed"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#noticed"}},[e._v("#")]),e._v(" Noticed")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Jekyll 3 的 _config.yml 中，變數 gems 已棄用，請改用 plugins")])]),e._v(" "),t("li",[t("p",[e._v("Syntax Highlighter")]),e._v(" "),t("blockquote",[t("p",[e._v("As of v3.0 Jekyll now uses Rouge as the default syntax highlighter."),t("br"),e._v("\nGithub only supports Rouge.")])])]),e._v(" "),t("li",[t("p",[e._v("Markdown Processor")]),e._v(" "),t("blockquote",[t("p",[e._v("Jekyll v3.x uses kramdown as its default Markdown engine and Github only supports kramdown.")])])]),e._v(" "),t("li",[t("p",[e._v("其實在 _config.yml 中使用了不支援的插件，馬上就會收到 GitHub 寄來的通知信了 ˊ_>ˋ")])])]),e._v(" "),t("h2",{attrs:{id:"resume"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#resume"}},[e._v("#")]),e._v(" Resume")]),e._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://jsonresume.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("JSON Resume"),t("OutboundLink")],1)]),e._v(" "),t("blockquote",[t("p",[t("strong",[e._v("Noticed:")]),e._v(" If you use branch except gh-pages in the project repo, the feature mapping "),t("code",[e._v("/")]),e._v(" to "),t("code",[e._v("index.*")]),e._v(" files does not work.")])])])]),e._v(" "),t("h2",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"http://mis101bird.js.org/jekyll_first_try/",target:"_blank",rel:"noopener noreferrer"}},[e._v("[jekyll]我的第一個Github個人網站"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://shyhornet.github.io/2015/10/18/%E7%AC%AC%E4%B8%80%E7%AF%87%E6%96%87%E7%AB%A0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("JEKYLL初探"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("分解 URI "),t("a",{attrs:{href:"http://downtothewire.io/2015/08/15/configuring-jekyll-for-user-and-project-github-pages/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Configuring Jekyll for User and Project GitHub Pages"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://tecadmin.net/install-ruby-2-4-centos-rvm/",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to Install Ruby 2.4.0 on CentOS/RHEL with RVM"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/blog/2151-github-pages-drops-support-for-rdiscount-redcarpet-and-redcloth-textile-markup-engines",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub Pages drops support for RDiscount, Redcarpet, and RedCloth (Textile) markup engines"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);r.default=n.exports}}]);