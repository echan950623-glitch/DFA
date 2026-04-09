import { useState } from 'react'
import ScrollReveal from '../ui/ScrollReveal'

// ↓ 換成你的 n8n webhook URL 或後端 API
const SUBMIT_ENDPOINT = 'https://your-n8n-webhook.com/webhook/dfa-lead'

export default function CTASection() {
  const [form, setForm] = useState({ name: '', contact: '', program: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.contact) return
    setStatus('loading')
    try {
      await fetch(SUBMIT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, timestamp: new Date().toISOString() }),
      })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="cta" className="bg-dfa-gradient overflow-hidden">
      <div className="container-max px-4 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left: copy */}
          <ScrollReveal>
            <p className="text-xs font-semibold text-dfa-dark uppercase tracking-[0.18em] mb-3">
              Get Started
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-5 leading-snug">
              開啟你的名校之路
            </h2>
            <p className="text-white/75 text-base leading-relaxed max-w-md mb-6">
              申請名校是硬碰硬，轉學名校是換一條更聰明的路。
              留下聯絡方式，我們的顧問將在 24 小時內與你聯繫，
              提供免費 15 分鐘升學評估。
            </p>

            {/* Proof points */}
            <ul className="space-y-2">
              {['完全免費，無任何隱藏費用', '24 小時內專人回覆', '適合高中生、大學生、已工作者'].map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm text-white/80">
                  <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-[10px] shrink-0">✓</span>
                  {t}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Right: form — solid white card */}
          <ScrollReveal delay={0.2}>
            <div className="bg-white rounded-lg shadow-2xl p-8">
              {status === 'success' ? (
                <div className="text-center py-8">
                  <div className="text-4xl mb-3">🎉</div>
                  <h3 className="font-bold text-dfa-dark text-xl mb-2">送出成功！</h3>
                  <p className="text-dfa-muted text-sm">
                    我們的顧問將在 24 小時內透過你提供的方式與你聯繫。
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-bold text-dfa-dark text-lg mb-1">預約免費評估</h3>
                  <p className="text-dfa-muted text-xs mb-4">填寫以下資訊，我們 24 hr 內回覆。</p>

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-dfa-dark mb-1.5">
                      姓名 <span className="text-red-400">*</span>
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="你的姓名"
                      className="w-full border border-dfa-border rounded-lg px-4 py-2.5 text-sm text-dfa-dark placeholder-dfa-muted focus:outline-none focus:border-dfa-blue focus:ring-1 focus:ring-dfa-blue transition"
                    />
                  </div>

                  {/* Contact */}
                  <div>
                    <label className="block text-xs font-semibold text-dfa-dark mb-1.5">
                      LINE ID / 手機 <span className="text-red-400">*</span>
                    </label>
                    <input
                      name="contact"
                      value={form.contact}
                      onChange={handleChange}
                      required
                      placeholder="LINE ID 或手機號碼"
                      className="w-full border border-dfa-border rounded-lg px-4 py-2.5 text-sm text-dfa-dark placeholder-dfa-muted focus:outline-none focus:border-dfa-blue focus:ring-1 focus:ring-dfa-blue transition"
                    />
                  </div>

                  {/* Program select */}
                  <div>
                    <label className="block text-xs font-semibold text-dfa-dark mb-1.5">
                      想了解的方案
                    </label>
                    <select
                      name="program"
                      value={form.program}
                      onChange={handleChange}
                      className="w-full border border-dfa-border rounded-lg px-4 py-2.5 text-sm text-dfa-dark bg-white focus:outline-none focus:border-dfa-blue focus:ring-1 focus:ring-dfa-blue transition"
                    >
                      <option value="">請選擇（可略過）</option>
                      <option value="cc-transfer">社區大學 2+2 轉學</option>
                      <option value="ivy">常春藤 / 頂尖大學直升</option>
                      <option value="uk-aus-nz">英澳紐留學方案</option>
                      <option value="tutoring">課業輔導</option>
                      <option value="other">其他 / 還不確定</option>
                    </select>
                  </div>

                  {/* Submit — solid dfa-dark, no gradient */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-dfa-dark text-white font-bold py-3 rounded-lg text-sm hover:bg-dfa-blue transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? '送出中…' : '立即預約免費評估'}
                  </button>

                  {status === 'error' && (
                    <p className="text-red-500 text-xs text-center">
                      送出失敗，請直接透過 LINE 聯繫我們。
                    </p>
                  )}

                  {/* LINE alternative */}
                  <p className="text-center text-xs text-dfa-muted pt-2">
                    或直接{' '}
                    <a
                      href="https://line.me/R/ti/p/@dreamfuture"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dfa-blue font-semibold hover:underline"
                    >
                      加 LINE 官方帳號
                    </a>{' '}
                    諮詢
                  </p>
                </form>
              )}
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
