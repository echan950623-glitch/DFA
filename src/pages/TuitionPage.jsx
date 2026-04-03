import ProgramHero from '../components/shared/ProgramHero'
import ScrollReveal from '../components/ui/ScrollReveal'
import SectionHeading from '../components/ui/SectionHeading'
import { HiCash, HiAcademicCap, HiUserGroup, HiClipboardCheck } from 'react-icons/hi'

const comparisons = [
  { label: '社區大學 (CC)', cost: '學費親民', costTwd: '大幅低於四年制大學', color: 'bg-emerald-50 border-emerald-200 text-emerald-700' },
  { label: '加州大學 (UC)', cost: '學費較高', costTwd: '國際學生標準費用', color: 'bg-red-50 border-red-200 text-red-700' },
]

const advantages = [
  { icon: HiCash, title: '學費便宜', desc: '社區大學每學分費用遠低於四年制大學，整體就讀預算相當親民，是留學性價比最高的選擇。' },
  { icon: HiUserGroup, title: '小班制', desc: '社區大學一般是小班制，師生互動多，老師更能注意學生的個別發展，相較四年制大學更易融入。' },
  { icon: HiClipboardCheck, title: '入學門檻低', desc: '國際學生申請社區學院只需繳交 TOEFL 成績，不需要 SAT 或 ACT 等入學試。部分學校甚至能豁免 TOEFL。' },
  { icon: HiAcademicCap, title: '轉入名校機率高', desc: '大學每年接受一定數量的社區學院學生，社區學院畢業生面臨較低的競爭，轉學錄取率比新生錄取率更高。' },
]

export default function TuitionPage() {
  return (
    <>
      <ProgramHero
        title="經濟入夢"
        subtitle="節省百萬學費，實現留學夢想"
      />

      {/* 費用對比 */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <ScrollReveal>
            <SectionHeading title="學費差異" subtitle="CC vs UC 費用比較" />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
            {comparisons.map((c, i) => (
              <ScrollReveal key={c.label} delay={i * 0.1}>
                <div className={`rounded-lg border-2 p-8 text-center ${c.color}`}>
                  <h3 className="font-bold text-lg mb-2">{c.label}</h3>
                  <p className="text-2xl font-black mb-1">{c.cost}</p>
                  <p className="text-sm opacity-75">{c.costTwd}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="bg-dfa-gradient rounded-lg p-8 text-center max-w-2xl mx-auto">
              <h3 className="text-white text-xl font-bold mb-2">前兩年就讀 CC，可大幅節省學費</h3>
              <p className="text-white/80 mb-2">社區大學學費遠低於四年制大學</p>
              <p className="text-white text-2xl font-black">選擇更聰明的路，省下可觀留學費用</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* TAG */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <ScrollReveal>
            <SectionHeading title="TAG 轉學優勢" />
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gray-600 leading-relaxed">
                透過 CC（如 Santa Monica College、Diablo Valley College）可申請 TAG（Transfer Admission Guarantee），以較低門檻進入 UC 系統名校。TAG 提供保證錄取，大幅降低申請不確定性。
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4大優勢 */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <ScrollReveal>
            <SectionHeading title="美國社區大學轉學優勢" />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv, i) => (
              <ScrollReveal key={adv.title} delay={i * 0.1}>
                <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-lg bg-dfa-blue flex items-center justify-center text-white">
                    <adv.icon className="text-2xl" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{adv.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{adv.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dfa-gradient section-padding">
        <div className="container-max text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-black text-white mb-6">用更聰明的方式，實現留學夢想</h2>
            <a href="#contact" className="inline-block bg-white text-dfa-blue font-bold rounded-md px-10 py-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              立即預約免費諮詢
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
