import { useState } from 'react'
import ScrollReveal from '../ui/ScrollReveal'

const FAQ_ITEMS = [
  {
    q: '什麼是社區大學 2+2 轉學？',
    a: '學生先在美國社區大學完成大一大二課程，再透過轉學協議（如 UC TAG）轉入四年制名校完成大三大四，最終取得該校學位。這是美國高等教育體系中成熟的升學路徑，合法且受名校正式認可。',
  },
  {
    q: '社區大學費用大約多少？比起直接讀大學省多少？',
    a: '社區大學學費（含生活費）遠低於四年制大學，兩年就讀可節省相當可觀的費用。整體算下來，2+2 路徑的留學費用顯著低於直讀四年制大學。',
  },
  {
    q: '轉學錄取率真的比新生更高嗎？',
    a: '是的。許多 UC 分校的轉學錄取率遠高於新生錄取率。加上部分社區大學與 UC 簽有「TAG 優先保證轉學協議」，資格符合者幾乎可鎖定錄取，成功率顯著更高。',
  },
  {
    q: '可以在台灣完成社區大學的課程嗎？',
    a: '可以。DFA 提供兩種模式：① 在台灣由機構指定場所完成社大課程（小班制輔導）；② 直接前往美國就讀，機構提供線上課業輔導。兩種模式均有完整師資支持。',
  },
  {
    q: '沒有美國高中學歷可以申請嗎？',
    a: '可以。社區大學入學條件相對寬鬆，只需提供高中畢業（或同等學力）證明及英語能力測驗成績。DFA 可協助學生提前準備英語標化考試，讓申請更順利。',
  },
  {
    q: 'DFA 的服務完整包含哪些？',
    a: '完整服務涵蓋：選校規劃、課程輔導、英語標化備考、全科作業與考試輔導、背景提升（科研 / 實習 / 課外活動）、轉學文書撰寫、面試指導，以及定期家長報告與學術進度追蹤。',
  },
]

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div
      className={`rounded-lg border transition-all duration-200 ${
        isOpen ? 'border-dfa-blue shadow-sm' : 'border-dfa-border'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
      >
        <span className={`font-semibold text-base md:text-lg ${isOpen ? 'text-dfa-blue' : 'text-dfa-dark'}`}>
          {item.q}
        </span>
        <span
          className={`shrink-0 w-6 h-6 rounded-full border flex items-center justify-center text-xs font-bold transition-all duration-200 ${
            isOpen
              ? 'bg-dfa-blue border-dfa-blue text-white'
              : 'border-dfa-border text-dfa-muted'
          }`}
        >
          {isOpen ? '−' : '+'}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="px-5 pb-5 text-base text-dfa-muted leading-relaxed border-t border-dfa-border pt-3">
          {item.a}
        </p>
      </div>
    </div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section-padding bg-dfa-surface">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* Left: heading */}
          <ScrollReveal className="lg:col-span-2">
            <p className="text-xs font-semibold text-dfa-blue uppercase tracking-[0.18em] mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-black text-dfa-dark mb-4 leading-snug">
              常見問題
            </h2>
            <p className="text-dfa-muted text-base leading-relaxed mb-8">
              家長和同學最常詢問的 2+2 轉學問題，這裡都有解答。
            </p>
            <p className="text-sm text-dfa-muted">
              還有其他疑問？
              <a
                href="https://line.me/R/ti/p/@dreamfuture"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dfa-blue font-semibold ml-1 hover:underline"
              >
                LINE 直接問我們 →
              </a>
            </p>
          </ScrollReveal>

          {/* Right: accordion */}
          <ScrollReveal delay={0.15} className="lg:col-span-3">
            <div className="space-y-3">
              {FAQ_ITEMS.map((item, i) => (
                <FAQItem
                  key={i}
                  item={item}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
                />
              ))}
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
