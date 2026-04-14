import ProgramHero from '../../components/shared/ProgramHero'
import ScrollReveal from '../../components/ui/ScrollReveal'
import SectionHeading from '../../components/ui/SectionHeading'

const tagSchools = [
  { name: 'UC Davis', abbr: 'UCD' },
  { name: 'UC Irvine', abbr: 'UCI' },
  { name: 'UC Merced', abbr: 'UCM' },
  { name: 'UC Riverside', abbr: 'UCR' },
  { name: 'UC Santa Barbara', abbr: 'UCSB' },
  { name: 'UC Santa Cruz', abbr: 'UCSC' },
]

export default function TagAdmissionPage() {
  return (
    <>
      <ProgramHero
        title="TAG 保錄取"
        subtitle="Transfer Admission Guarantee — 加州大學轉學保證錄取"
      />

      {/* TAG 說明 */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <ScrollReveal>
            <SectionHeading title="什麼是 TAG？" />
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-700 text-base leading-relaxed text-center mb-8">
                TAG（Transfer Admission Guarantee）是加州大學系統為社區大學學生提供的「轉學保證錄取」計畫。只要學生在加州社區大學完成指定課程並達到最低 GPA 要求，就能獲得特定 UC 校區的保證錄取。這是社區大學轉學路徑中最具優勢的制度之一。
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-dfa-light rounded-lg p-8 max-w-3xl mx-auto mb-12">
              <h3 className="font-bold text-dfa-blue text-lg mb-4 text-center">TAG 優勢</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-6">
                  <div className="text-3xl mb-2">✅</div>
                  <p className="font-medium text-gray-900">保證錄取</p>
                  <p className="text-sm text-gray-700">符合條件即保證入學</p>
                </div>
                <div className="text-center p-6">
                  <div className="text-3xl mb-2">📉</div>
                  <p className="font-medium text-gray-900">較低 GPA 門檻</p>
                  <p className="text-sm text-gray-600">比一般申請門檻更友善</p>
                </div>
                <div className="text-center p-6">
                  <div className="text-3xl mb-2">🎯</div>
                  <p className="font-medium text-gray-900">提前確定結果</p>
                  <p className="text-sm text-gray-600">減少申請不確定性</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 參與 TAG 的 UC 學校 */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <ScrollReveal>
            <SectionHeading title="參與 TAG 的 UC 校區" />
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {tagSchools.map((school, i) => (
              <ScrollReveal key={school.abbr} delay={i * 0.05}>
                <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
                  <div className="text-2xl font-black text-dfa-blue mb-2">{school.abbr}</div>
                  <p className="text-sm text-gray-700">{school.name}</p>
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
            <h2 className="text-3xl font-black text-white mb-6">透過 TAG 保證進入 UC 名校</h2>
            <a href="https://lin.ee/O1ejJf7" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-dfa-blue font-bold rounded-md px-10 py-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              立即預約免費諮詢
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
