import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiChevronDown } from 'react-icons/hi'
import { navItems } from '../../data/navigation'

export default function MobileMenu({ onClose }) {
  const [expandedItem, setExpandedItem] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100%' }}
      transition={{ type: 'tween', duration: 0.3 }}
      className="fixed inset-0 top-[76px] z-40 bg-white overflow-y-auto"
    >
      <nav className="p-5 space-y-1">
        {navItems.map((item) =>
          item.children ? (
            <div key={item.label}>
              <button
                onClick={() =>
                  setExpandedItem(expandedItem === item.label ? null : item.label)
                }
                className="flex items-center justify-between w-full px-4 py-3.5 text-[17px] text-gray-700 font-medium rounded-md hover:bg-dfa-light"
              >
                {item.label}
                <HiChevronDown
                  className={`w-5 h-5 transition-transform ${
                    expandedItem === item.label ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedItem === item.label && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className="ml-4 space-y-1 overflow-hidden"
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      onClick={onClose}
                      className="block px-4 py-3.5 text-[16px] text-gray-600 rounded-md hover:bg-dfa-light hover:text-dfa-blue"
                    >
                      {child.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          ) : (
            <Link
              key={item.label}
              to={item.path}
              onClick={onClose}
              className="block px-4 py-3.5 text-[17px] text-gray-700 font-medium rounded-md hover:bg-dfa-light"
            >
              {item.label}
            </Link>
          )
        )}
        <div className="pt-4 px-4">
          <Link
            to="#contact"
            onClick={onClose}
            className="block text-center text-[16px] font-semibold bg-dfa-blue text-white py-3.5 rounded-md hover:bg-dfa-dark transition-colors w-full"
          >
            免費諮詢
          </Link>
        </div>
      </nav>
    </motion.div>
  )
}
