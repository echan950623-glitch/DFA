import ProgramHero from '../components/shared/ProgramHero'
import ScrollReveal from '../components/ui/ScrollReveal'
import SectionHeading from '../components/ui/SectionHeading'

const tutoringServices = [
  {
    title: '英語標化考試輔導',
    desc: '針對英語水平薄弱的學員，夢想家有專業盡責的學術老師，可對其提供英語輔導，使學員的英語水平快速提升，通過多鄰國英語水平測試。',
    features: ['與雅思/托福同等效力', '不用搶考位，隨時隨地線上考', '2天極速出成績'],
  },
  {
    title: '美式互動小班制教學',
    desc: '若學員選擇在國內讀美國社區大學，本機構可提供精品小班制教學。相較於傳統大班，精品小班制可以為學生提供更多與教授接觸互動的機會。',
    features: ['小班制互動教學', '提前適應美式學習', '提升學生自信心'],
  },
  {
    title: '全科目作業輔導',
    desc: '對學員進行小班化或一對一的全科目作業輔導，與學生保持溝通，對學生的問題第一時間予以解答。',
    features: ['課程輔導', '上課輔導', '作業考試輔導', '論文輔導'],
  },
  {
    title: '背景提升服務',
    desc: '名校科研活動、名校暑課、名企內推、競賽活動、志願者活動等，全方位提升學員競爭力。',
    features: ['常春藤教授科研項目（4-6周）', '矽谷導師實戰項目（Google/Apple）', '名企內推與競賽活動'],
  },
]

export default function TutoringPage() {
  return (
    <>
      <ProgramHero
        title="專業家教"
        subtitle="全科目輔導、英語標化考試、背景提升"
      />

      <section className="section-padding bg-white">
        <div className="container-max">
          <ScrollReveal>
            <SectionHeading title="家教服務內容" />
          </ScrollReveal>
          <div className="space-y-6 max-w-4xl mx-auto">
            {tutoringServices.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.1}>
                <div className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden">
                  <div className="h-2 bg-dfa-blue" />
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                    <p className="text-gray-700 text-base leading-relaxed mb-4">{s.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.features.map((f) => (
                        <span key={f} className="text-xs font-medium px-3 py-1.5 rounded-md bg-dfa-light text-dfa-blue">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dfa-gradient section-padding">
        <div className="container-max text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-black text-white mb-6">需要學術輔導與背景提升？</h2>
            <a href="https://lin.ee/O1ejJf7" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-dfa-blue font-bold rounded-md px-10 py-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              立即預約免費諮詢
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
