## 遊戲論壇 (Game Forum)
這是一個使用 Vue 3、Vite 與 Firebase 打造的遊戲論壇專案。專注於高效能的資料讀取與直覺的 UI 互動體驗，並採用 Tailwind CSS 4.0 進行開發。

# 作品亮點
  Vue 3 Composition API：使用 setup 語法糖與 Composable 邏輯封裝，提升程式碼重用性。
  Firebase 實時整合：
    Firestore：實現動態遊戲列表與詳情頁的異步資料抓取。
    Authentication：整合 Google 與 Email 登入系統，並動態管理使用者狀態。
  現代化 UI ：
    使用 Shadcn UI (Radix UI) 打造流暢的導覽選單與卡片系統。
    整合 Embla Carousel 實現具備自動播放與懸停暫停功能的遊戲輪播。

技術
  本專案採用以下技術開發：
  核心框架：Vue 3 (Composition API)
  構建工具：Vite 7
  程式語言：TypeScript
  後端服務：Firebase (Firestore & Authentication)
  樣式處理：Tailwind CSS 4.0
  UI 元件庫：Shadcn UI (包含 Carousel, Navigation Menu, Card 等元件)
  外部工具：VueUse, Lucide-Vue-Next

專案核心架構
  src/Composable/：封裝 Firebase 交互邏輯 (useGames, useAuth)。
  src/view/：包含首頁 (home.vue)、詳情頁 (game.vue) 與導覽列 (navbar.vue)。
  src/components/ui/：封裝基於 Radix UI 的原子化 UI 元件。
  
src/
├── Composable/      # 業務邏輯封裝 (Firebase 資料交互)
├── components/
│   ├── ui/          # 基礎 UI 元件 (Shadcn UI)
│   └── firebase/    # Firebase 設定檔
├── view/            # 頁面級組件 (Home, Game Detail, Navbar)
├── router/          # 路由配置
└── lib/             # 工具函式 (如 Tailwind 類名合併 cn)

如何在本地運行
複製專案: git clone <your-repo-url>

安裝依賴: npm install
請確保環境符合專案要求的 Node.js 版本（^20.19.0 或 >=22.12.0）

設定環境變數: 建立 .env 檔案並填入你的 Firebase 配置。

啟動開發伺服器: npm run dev


## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).
