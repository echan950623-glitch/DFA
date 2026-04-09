# DFA 設計系統公式（從 Crimson Education 分析提煉）

## 一、文字層級公式（Typography Hierarchy）

```
層級          桌面              手機              字重     顏色
────────────────────────────────────────────────────────────────
H1 頁面主標    48-56px (3-3.5rem) 36px (2.25rem)    900      白色（hero）/ #1a1a1a
H2 區塊標題    40-48px (2.5-3rem) 28-32px (1.75-2rem) 900    #1a1a1a
H3 卡片標題    24px (1.5rem)      20px (1.25rem)    700      #1a1a1a
數字/統計      56-72px (3.5-4.5rem) 40px (2.5rem)   900      品牌色（漸層）
Eyebrow 標籤  12px (0.75rem)     12px              600      品牌色 uppercase tracking-widest
Body 正文     17-18px (1.06-1.125rem) 16px (1rem)   400      #525252（灰）
Caption 說明  14px (0.875rem)    13px (0.8125rem)   500      #9ca3af（淺灰）
```

### 核心規則
- **重點文字與說明文字的 size ratio ≥ 2x**（例：標題 48px vs 說明 18px）
- **同一區域最多出現 3 種字級**（標題 / 副標 / 正文）
- **顏色層級**：黑 → 深灰 → 中灰 → 淺灰（#1a1a1a → #525252 → #9ca3af → #d1d5db）

---

## 二、排版公式（Layout Formula）

### Section 結構
```
每個 section = eyebrow + 大標題 + （說明文字在右邊 or 下面） + 內容區
```

### 內容排列模式（3 種，交替使用）
```
模式A：左標題右說明
┌──────────────────────────────────────────────┐
│  EYEBROW LABEL                               │
│  大標題文字              說明段落放在右邊。    │
│                          小字灰色補充資訊。    │
│                                               │
│  [內容區：卡片/表格/數字]                      │
└──────────────────────────────────────────────┘

模式B：大數字列表
┌──────────────────────────────────────────────┐
│  72px大數字    標題          說明文字          │
│  ─────────────────────────────────────────── │
│  72px大數字    標題          說明文字          │
└──────────────────────────────────────────────┘

模式C：全寬強調
┌──────────────────────────────────────────────┐
│           （置中）                             │
│       超大標題文字 48px                        │
│       一行簡短說明 18px                        │
│       [CTA 按鈕]                              │
└──────────────────────────────────────────────┘
```

---

## 三、間距公式（Spacing）

```
Token           桌面           手機
─────────────────────────────────────
section-py      80px (5rem)    48px (3rem)
heading-mb      40px (2.5rem)  24px (1.5rem)
card-gap        24px (1.5rem)  16px (1rem)
container       max-w-7xl (1280px)
side-padding    75px (xl+)     25px (mobile)
```

---

## 四、背景色輪替公式

```
Hero         → 品牌漸層/深色+圖片
Section 1    → 白色 #FFFFFF
Section 2    → 淺灰 #F5F5F0 / 品牌淡色 #EEF3FA
Section 3    → 白色
Section 4    → 深色 #0A2A6E（品牌深藍）
Section 5    → 白色
CTA          → 品牌漸層
```

規則：**不連續出現 2 個以上同色 section**

---

## 五、卡片公式

```
屬性           Crimson 風格          DFA 對應
───────────────────────────────────────────────
border-radius  4-8px（小）           rounded-md (6px)
box-shadow     none 或極淡           shadow-sm
border         1px #e5e7eb 或 none   border border-gray-200
背景色         白色（在灰底上）       bg-white
padding        24-32px               p-6 md:p-8
hover          微升 + 淡 shadow      hover:-translate-y-0.5 hover:shadow-md
```

---

## 六、CTA 按鈕公式

```
主要 CTA     → 品牌實色背景 + 白字 + rounded-md + px-8 py-4 + 大字 (16px bold)
次要 CTA     → 透明背景 + 品牌色邊框 + 品牌色字 + 同尺寸
幽靈 CTA     → 白色背景 + 品牌深色字 + shadow
```

---

## 七、Tailwind 對照表

```js
// tailwind.config.js extend
fontSize: {
  'display':  ['3.5rem', { lineHeight: '1.1', fontWeight: '900' }],   // 56px 統計數字
  'h1':       ['3rem',   { lineHeight: '1.15', fontWeight: '900' }],   // 48px 頁面主標
  'h2':       ['2.5rem', { lineHeight: '1.2', fontWeight: '900' }],    // 40px 區塊標題
  'h3':       ['1.5rem', { lineHeight: '1.3', fontWeight: '700' }],    // 24px 卡片標題
  'body':     ['1.0625rem', { lineHeight: '1.7', fontWeight: '400' }], // 17px 正文
  'caption':  ['0.875rem', { lineHeight: '1.5', fontWeight: '500' }],  // 14px 說明
  'eyebrow':  ['0.75rem', { lineHeight: '1', fontWeight: '600', letterSpacing: '0.15em' }],
},
colors: {
  'text-primary':   '#1a1a1a',
  'text-secondary': '#525252',
  'text-muted':     '#9ca3af',
  'text-faint':     '#d1d5db',
  'bg-tint':        '#EEF3FA',   // DFA 品牌淡藍
}
```
