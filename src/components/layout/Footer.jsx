import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebookF, FaLine, FaEnvelope } from 'react-icons/fa'
import { navItems } from '../../data/navigation'
import { offices, socialLinks } from '../../data/contact'

export default function Footer() {
  return (
    <footer className="bg-dfa-gradient text-white border-t border-white/30">
      <div className="container-max px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="font-black text-2xl tracking-wider mb-1">DFA</div>
            <p className="text-sm text-white/80 mb-4">Dream Future Academy</p>
            <p className="text-base text-white leading-relaxed">
              專注解決教育資源分布不公，為孩子成就光明的未來。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">快速連結</h4>
            <ul className="space-y-2.5">
              {navItems.slice(0, 5).map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.children ? item.children[0].path : item.path}
                    className="text-base text-white/90 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">辦公室據點</h4>
            <ul className="space-y-2.5">
              {offices.map((o) => (
                <li key={o.city} className="text-base text-white/90">
                  {o.city} {o.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">聯絡我們</h4>
            <div className="flex gap-3">
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <FaInstagram className="text-base" />
              </a>
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <FaFacebookF className="text-base" />
              </a>
              <a href={socialLinks.line} target="_blank" rel="noopener noreferrer" aria-label="LINE" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <FaLine className="text-base" />
              </a>
              <a href={socialLinks.email} aria-label="Email" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <FaEnvelope className="text-base" />
              </a>
            </div>
            <p className="text-sm text-white/80 mt-4">@dreamfuture.academy</p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-center text-sm text-white/80">
          &copy; {new Date().getFullYear()} Dream Future Academy. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
