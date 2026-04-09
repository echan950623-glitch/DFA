import { useState } from 'react'
import ProgramHero from '../components/shared/ProgramHero'
import ScrollReveal from '../components/ui/ScrollReveal'
import SectionHeading from '../components/ui/SectionHeading'
import { allStories } from '../data/successStories'

const TIERS = [
  {
    id: 'reach',
    label: '衝刺校',
    en: 'Reach',
    desc: '目標排名前 10–30，錄取難度高但值得挑戰。背景強化後勝算大幅提升。',
    color: 'bg-sky-50 border-sky-400',
    badge: 'text-sky-600',
    pill: 'bg-sky-100 text-sky-800',
    examples: ['UCB', 'UCLA', 'UCSD', 'Michigan', 'UIUC'],
  },
  {
    id: 'target',
    label: '目標校',
    en: 'Target',
    desc: '符合背景條件、有合理錄取機率的學校，是申請策略的主力。',
    color: 'bg-indigo-50 border-indigo-400',
    badge: 'text-indigo-600',
    pill: 'bg-indigo-100 text-indigo-800',
    examples: ['UC Davis', 'UC Irvine', 'UCSB', 'UNC', 'Purdue'],
  },
  {
    id: 'safety',
    label: '保底校',
    en: 'Safety',
    desc: '確保至少有優質錄取結果，讓整體申請策略零風險。',
    color: 'bg-emerald-50 border-emerald-400',
    badge: 'text-emerald-600',
    pill: 'bg-emerald-100 text-emerald-800',
    examples: ['UC Riverside', 'UC Santa Cruz', 'UC Merced', 'Arizona State'],
  },
]

const UNIVERSITIES = [
  { name: '加州大學伯克利分校', nameEn: 'UC Berkeley', rank: '#1 Public', tag: 'UCB' },
  { name: '加州大學洛杉磯分校', nameEn: 'UC Los Angeles', rank: '#1 Public', tag: 'UCLA' },
  { name: '加州大學聖地牙哥分校', nameEn: 'UC San Diego', rank: 'Top 10 Public', tag: 'UCSD' },
  { name: '密歇根大學安娜堡分校', nameEn: 'University of Michigan', rank: 'Top 25', tag: 'UMICH' },
  { name: '伊利諾伊大學香檳分校', nameEn: 'UIUC', rank: 'Top 50', tag: 'UIUC' },
  { name: '北卡羅來納大學教堂山分校', nameEn: 'UNC Chapel Hill', rank: 'Top 30', tag: 'UNC' },
  { name: '加州大學戴維斯分校', nameEn: 'UC Davis', rank: 'Top 40', tag: 'UCD' },
  { name: '加州大學爾灣分校', nameEn: 'UC Irvine', rank: 'Top 40', tag: 'UCI' },
  { name: '加州大學聖塔芭芭拉分校', nameEn: 'UC Santa Barbara', rank: 'Top 40', tag: 'UCSB' },
  { name: '加州大學河濱分校', nameEn: 'UC Riverside', rank: 'Top 100', tag: 'UCR' },
]

export default function ApplyAnalysisPage() {
  const [activeStory, setActiveStory] = useState(null)

  return (
    <>
      <ProgramHero
        title="申請落點分析"
        subtitle="不是所有人都應該只申請夢想學校 — 真正會申請的人，會同時布局三個層級"
      />

      {/* ── 三層次策略 ── */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <ScrollReveal>
            <SectionHeading
              label="Strategy"
              title="三層次申請策略"
              subtitle="聰明布局，確保最佳錄取結果"
              split
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {TIERS.map((tier, i) => (
              <ScrollReveal key={tier.id} delay={i * 0.12}>
                <div className={`rounded-lg border-2 p-6 ${tier.color} hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-2xl font-black ${tier.badge}`}>{tier.en}</span>
                    <span className="text-lg font-bold text-txt-primary">{tier.label}</span>
                  </div>
                  <p className="text-body text-txt-secondary leading-relaxed mb-4">{tier.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {tier.examples.map((ex) => (
                      <span key={ex} className={`text-caption px-2 py-1 rounded-md font-medium ${tier.pill}`}>{ex}</span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <p className="text-center text-txt-muted text-body mt-8 max-w-xl mx-auto leading-relaxed">
              DFA 顧問會依據每位學生的 GPA、修課紀錄、課外活動與目標，制定最優化的申請學校組合
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 美國名校榜單 ── */}
      <section className="section-padding">
        <div className="container-max">
          <ScrollReveal>
            <SectionHeading label="Universities" title="美國名校榜單" subtitle="DFA 學員成功錄取院校一覽" split />
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-4xl mx-auto mb-16">
            {UNIVERSITIES.map((u, i) => (
              <ScrollReveal key={u.tag} delay={i * 0.05}>
                <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                  <div className="text-xl font-black text-dfa-blue mb-1">{u.tag}</div>
                  <p className="text-caption text-txt-secondary font-medium leading-tight">{u.name}</p>
                  <p className="text-[10px] text-txt-faint mt-1">{u.rank}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Success stories */}
          <ScrollReveal>
            <SectionHeading label="Success Stories" title="學員案例" subtitle="真實的錄取故事" split />
          </ScrollReveal>

          <div className="space-y-6 max-w-4xl mx-auto">
            {allStories.map((story, i) => (
              <ScrollReveal key={`${story.name}-${i}`} delay={i * 0.08}>
                <div
                  className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-md transition-all duration-200"
                  onClick={() => setActiveStory(activeStory?.name === story.name ? null : story)}
                >
                  <div className="h-1.5" style={{ background: 'linear-gradient(to right, #2DD8EE, #1040CC)' }} />
                  <div className="p-5 flex flex-col md:flex-row md:items-center gap-4">
                    {/* Avatar + info */}
                    <div className="flex items-center gap-4 md:w-72 shrink-0">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0"
                        style={{ background: 'linear-gradient(135deg, #2DD8EE, #1040CC)' }}>
                        {story.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-txt-primary">{story.name}</p>
                        <p className="text-caption text-txt-muted">{story.college} → <span className="text-dfa-blue font-semibold">{story.university}</span></p>
                        <p className="text-caption text-txt-muted">{story.major} ｜ GPA <span className="font-bold text-dfa-blue">{story.gpa}</span></p>
                      </div>
                    </div>
                    {/* Story preview / expand */}
                    <div className="flex-1">
                      <p className={`text-body text-txt-secondary leading-relaxed ${activeStory?.name === story.name ? '' : 'line-clamp-2'}`}>
                        {story.story}
                      </p>
                    </div>
                    <div className="shrink-0 text-dfa-blue text-xs font-medium">
                      {activeStory?.name === story.name ? '收起 ↑' : '展開 ↓'}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding" style={{ background: 'linear-gradient(to right, #2DD8EE 0%, #1A9AE6 40%, #1040CC 100%)' }}>
        <div className="container-max text-center">
          <ScrollReveal>
            <h2 className="text-h2 text-white mb-3">讓顧問幫你分析最佳落點</h2>
            <p className="text-white/80 mb-8">依據你的背景量身制定衝刺校・目標校・保底校清單</p>
            <a href="#contact" className="inline-block bg-white text-dfa-dark font-bold rounded-lg px-10 py-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              預約免費落點分析
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
