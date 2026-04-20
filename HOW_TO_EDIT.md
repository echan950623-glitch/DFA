# DFA 網站 — 常用編輯指南

本網站沒有後台，所有內容編輯都透過修改程式碼檔案。以下是最常用的幾個編輯操作。

---

## 1. 開啟／關閉隱藏的頁面（移夢他國 / 遊學四海）

**檔案：** [`src/data/featureFlags.js`](src/data/featureFlags.js)

把 `false` 改成 `true` 即可開啟對應頁面；改回 `false` 就會隱藏。

```js
export const featureFlags = {
  showImmigration: false,   // ← 移夢他國：true = 顯示，false = 隱藏
  showStudyTour: false,     // ← 遊學四海
}
```

---

## 2. 修改導覽列項目（增／刪／改名 / 調順序）

**檔案：** [`src/data/navigation.js`](src/data/navigation.js)

```js
{ label: '夢校與課程', path: '/schools' },  // 改 label 就改名
```

---

## 3. 修改師資資料（築夢導師頁）

**檔案：** [`src/data/team.js`](src/data/team.js)

每個老師一個物件，修改 name / school / degree / bio 即可。

---

## 4. 修改成功案例（UCB / UCLA 錄取榜單）

**檔案：** [`src/data/successStories.js`](src/data/successStories.js)

依照 `ucla` / `ucb` / `other` 分組，每個學生一個物件。

---

## 5. 修改合作社區大學 / 夢校資料

**檔案：** [`src/data/schools.js`](src/data/schools.js)

---

## 6. 修改聯絡資訊 / 辦公室據點 / 社群連結

**檔案：** [`src/data/contact.js`](src/data/contact.js)

---

## 編輯完後如何讓改動上線？

### 方法 A：GitHub 網頁直接編輯（推薦給非工程師）

1. 打開 GitHub 專案：<https://github.com/echan950623-glitch/DFA>
2. 找到要修改的檔案並點進去
3. 右上角點「鉛筆」圖示 → Edit this file
4. 修改內容
5. 下方「Commit changes」
6. 如果 Cloudflare Pages 有接 GitHub 自動部署，5-10 分鐘後就會更新；
   否則需要工程師執行部署指令。

### 方法 B：工程師手動部署

```bash
npm run build
CLOUDFLARE_API_TOKEN="<token>" npx wrangler pages deploy dist --project-name dfa-website
```

---

## 建議設定自動部署（一次性）

進 Cloudflare Pages 專案 → Settings → Builds & deployments → 接 GitHub repo，
之後 master 分支每次 push 就會自動重新部署，業主透過 GitHub 改內容就能直接上線。
