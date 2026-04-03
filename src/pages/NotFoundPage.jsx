import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-dfa-light">
      <div className="text-center px-4">
        <div className="text-8xl font-black gradient-text mb-4">404</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">頁面不存在</h1>
        <p className="text-gray-600 mb-8">您訪問的頁面不存在，請返回首頁。</p>
        <Link
          to="/"
          className="btn-gradient inline-block"
        >
          返回首頁
        </Link>
      </div>
    </section>
  )
}
