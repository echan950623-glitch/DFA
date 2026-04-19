import ProgramHero from '../components/shared/ProgramHero'
import ScrollReveal from '../components/ui/ScrollReveal'
import SectionHeading from '../components/ui/SectionHeading'
import { HiDocumentText, HiHome, HiPhone, HiGlobeAlt } from 'react-icons/hi'
import CTABanner from '../components/shared/CTABanner'

const visaServices = [
  {
    icon: HiDocumentText,
    title: '行前指導',
    desc: '提供詳細的出國行前指南，配有專業的導師對學生的行李準備、體檢要求等細節進行指導，使學生即便初到美國也能應對自如。',
  },
  {
    icon: HiHome,
    title: '新生指導',
    desc: '學員抵達美國後，團隊會指導學員到校報到、參加入學測試和新生見面會 Orientation 指導、住宿辦理指導，幫助學員順利開啟留學生活。',
  },
  {
    icon: HiPhone,
    title: '全天候答疑與緊急幫助',
    desc: '作為學員在美國的緊急聯絡人，學員遇到突發情況時，會第一時間幫助學生解決問題。',
  },
  {
    icon: HiGlobeAlt,
    title: 'F-1 學生簽證申請',
    desc: '協助學員準備 F-1 學生簽證所需文件，包含 I-20 表格、財力證明、簽證面試準備等完整指導。',
  },
]

export default function VisaPage() {
  return (
    <>
      <ProgramHero
        title="夢想手續與簽證"
        subtitle="從行前準備到落地安頓，全程陪伴"
      />

      <section className="section-padding bg-white">
        <div className="container-max">
          <ScrollReveal>
            <SectionHeading title="我們的服務" />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {visaServices.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.1}>
                <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
                  <div className="w-14 h-14 mb-4 rounded-lg bg-dfa-blue flex items-center justify-center text-white">
                    <s.icon className="text-2xl" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-base text-gray-700 leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="讓我們陪你從台灣到美國"
        subtitle="簽證、行前、落地，全程一對一協助"
      />
    </>
  )
}
