import ScrollReveal from '../ui/ScrollReveal'
import {
  HiAcademicCap,
  HiCurrencyDollar,
  HiUserGroup,
  HiShieldCheck,
} from 'react-icons/hi'

const advantages = [
  {
    Icon: HiCurrencyDollar,
    title: '節省百萬學費',
    desc: '社區大學年費遠低於四年制大學，前兩年就讀社區大學可大幅節省學費支出。',
    gradient: 'from-[#4DD9EC] to-[#0AAABB]',
    bg: '#EBF9FC',
  },
  {
    Icon: HiAcademicCap,
    title: '名校錄取率更高',
    desc: '許多 UC 分校的轉學錄取率遠高於新生錄取率。社區大學是進入頂尖名校最聰明的跳板。',
    gradient: 'from-[#3DCEE4] to-[#0066CC]',
    bg: '#EBF2FC',
  },
  {
    Icon: HiUserGroup,
    title: '師資力量雄厚',
    desc: '導師均畢業於美國名校，擁有 Google、Apple、Microsoft、McKinsey 等頂尖企業背景，提供一對一深度陪跑。',
    gradient: 'from-[#0066CC] to-[#003366]',
    bg: '#EBF0F8',
  },
  {
    Icon: HiShieldCheck,
    title: '錄取保障簽約',
    desc: '以合約保障學員完成社區大學後錄取美國頂尖院校。若未能達標，退還全部服務費用，零風險承諾。',
    gradient: 'from-[#003366] to-[#4DD9EC]',
    bg: '#EBF6FA',
  },
]

export default function AdvantagesSection() {
  return (
    <section className="section-padding" style={{ background: 'linear-gradient(180deg, #F0FAFF 0%, #FFFFFF 100%)' }}>
      <div className="container-max">

        {/* ── Header ── */}
        <ScrollReveal className="mb-14">
          <p className="text-xs font-semibold text-dfa-blue uppercase tracking-[0.18em] mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-dfa-dark mb-4 leading-snug">
            轉學優勢
          </h2>
          <p className="text-dfa-muted text-base max-w-xl leading-relaxed">
            選擇夢想家，選擇一條更聰明、更有保障的升學路徑。
          </p>
        </ScrollReveal>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((adv, i) => (
            <ScrollReveal key={adv.title} delay={i * 0.1}>
              <div
                className="rounded-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col border border-transparent"
                style={{ background: adv.bg }}
              >
                {/* Gradient circle icon */}
                <div
                  className={`w-14 h-14 rounded-lg bg-gradient-to-br ${adv.gradient} flex items-center justify-center text-white mb-5 shadow-md`}
                >
                  <adv.Icon className="text-2xl" />
                </div>

                <h3 className="font-bold text-dfa-dark text-lg mb-2 leading-snug">
                  {adv.title}
                </h3>
                <p className="text-base text-dfa-muted leading-relaxed flex-1">
                  {adv.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
