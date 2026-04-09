import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'
import { AnimatePresence } from 'framer-motion'
import useScrollPosition from '../../hooks/useScrollPosition'
import { navItems } from '../../data/navigation'
import NavDropdown from './NavDropdown'
import MobileMenu from './MobileMenu'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const scrollY = useScrollPosition()
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const scrolled = scrollY > 50

  const showSolid = !isHome || scrolled

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          showSolid
            ? 'bg-white border-b border-gray-200'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between h-[76px] px-6 xl:px-[75px]">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src={showSolid ? '/logos/logo-color-transparent.png' : '/logos/logo-white.png'}
              alt="Dream Future Academy"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav + CTA */}
          <div className="hidden lg:flex items-center gap-1">
            <nav className="flex items-center gap-1">
              {navItems.map((item) =>
                item.children ? (
                  <NavDropdown key={item.label} item={item} solid={showSolid} />
                ) : (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`px-3 py-2 text-[15px] font-medium whitespace-nowrap transition-colors rounded-md ${
                      showSolid
                        ? 'text-gray-700 hover:text-dfa-blue hover:bg-gray-50'
                        : 'text-white/85 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>
            <Link
              to="#contact"
              className={`ml-4 text-[15px] font-semibold px-6 py-2.5 rounded-md transition-all whitespace-nowrap ${
                showSolid
                  ? 'bg-dfa-blue text-white hover:bg-dfa-dark'
                  : 'bg-white/10 text-white border border-white/30 hover:bg-white/20'
              }`}
            >
              免費諮詢
            </Link>
          </div>

          {/* Hamburger (mobile) */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 ${showSolid ? 'text-gray-700' : 'text-white'}`}
          >
            {mobileOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
      </AnimatePresence>
    </>
  )
}
