import ScrollReveal from '../ui/ScrollReveal'

const SCHOOLS = [
  { tag: 'UCB', full: 'UC Berkeley' },
  { tag: 'UCLA', full: 'UC Los Angeles' },
  { tag: 'UCSD', full: 'UC San Diego' },
  { tag: 'UCSB', full: 'UC Santa Barbara' },
  { tag: 'UCI', full: 'UC Irvine' },
  { tag: 'UCD', full: 'UC Davis' },
  { tag: 'Michigan', full: 'Univ. of Michigan' },
  { tag: 'UIUC', full: 'Illinois Urbana' },
]

export default function SchoolsStrip() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <ScrollReveal>
          <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-[0.25em] mb-10">
            學員成功錄取院校
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-3xl mx-auto">
            {SCHOOLS.map((s, i) => (
              <div
                key={s.tag}
                className="group flex flex-col items-center gap-1 px-5 py-3 rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default"
              >
                <span
                  className="font-black text-lg leading-none"
                  style={{
                    background: 'linear-gradient(to right, #1A9AE6, #1040CC)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {s.tag}
                </span>
                <span className="text-[10px] text-gray-400 font-medium whitespace-nowrap">{s.full}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-center text-xs text-gray-400 mt-8">
            以上為部分錄取院校，完整名單歡迎諮詢
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
