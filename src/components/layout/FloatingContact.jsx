import { FaLine, FaWhatsapp, FaEnvelope, FaFacebookF } from 'react-icons/fa'
import { socialLinks } from '../../data/contact'

const contactButtons = [
  { icon: FaFacebookF, label: 'Facebook', href: socialLinks.facebook, color: 'bg-blue-600 hover:bg-blue-700' },
  { icon: FaLine, label: 'Line', href: socialLinks.line, color: 'bg-green-500 hover:bg-green-600' },
  { icon: FaEnvelope, label: 'Email', href: socialLinks.email, color: 'bg-sky-500 hover:bg-sky-600' },
]

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {contactButtons.map((btn) => (
        <a
          key={btn.label}
          href={btn.href}
          target={btn.href.startsWith('mailto') ? undefined : '_blank'}
          rel="noopener noreferrer"
          className={`w-12 h-12 rounded-full text-white shadow-lg flex items-center justify-center ${btn.color} transition-all hover:scale-110 hover:shadow-xl`}
          title={btn.label}
        >
          <btn.icon size={20} />
        </a>
      ))}
    </div>
  )
}
