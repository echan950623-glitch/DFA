import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronDown } from 'react-icons/hi'

export default function NavDropdown({ item, solid }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={`flex items-center gap-0.5 px-2.5 py-2 text-[13px] font-medium whitespace-nowrap rounded-lg transition-colors ${
          solid
            ? 'text-gray-700 hover:text-dfa-blue hover:bg-dfa-light'
            : 'text-white/90 hover:text-white hover:bg-white/10'
        }`}
      >
        {item.label}
        <HiChevronDown
          className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 pt-1 w-56"
          >
            <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2 overflow-hidden">
              {item.children.map((child) => (
                <Link
                  key={child.path}
                  to={child.path}
                  className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-dfa-light hover:text-dfa-blue transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
