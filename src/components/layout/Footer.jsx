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
            <p className="text-xs text-white/40 mb-4">Dream Future Academy</p>
            <p className="text-sm text-white/75 leading-relaxed">
              專注解決教育資源分布不公，為孩子成就光明的未來。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">快速連結</h4>
            <ul className="space-y-2">
              {navItems.slice(0, 5).map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.children ? item.children[0].path : item.path}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">辦公室據點</h4>
            <ul className="space-y-2">
              {offices.map((o) => (
                <li key={o.city} className="text-sm text-white/80">
                  {o.city} {o.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">聯絡我們</h4>
            <div className="flex gap-3">
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <FaInstagram className="text-sm" />
              </a>
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <FaFacebookF className="text-sm" />
              </a>
              <a href={socialLinks.line} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <FaLine className="text-sm" />
              </a>
              <a href={socialLinks.email} className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <FaEnvelope className="text-sm" />
              </a>
            </div>
            <p className="text-xs text-white/30 mt-4">@dreamfuture.academy</p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-center text-xs text-white/30">
          &copy; {new Date().getFullYear()} Dream Future Academy. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
