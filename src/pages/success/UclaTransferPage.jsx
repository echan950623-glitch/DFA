import TransferSuccessPage from '../../components/shared/TransferSuccessPage'
import { successStories } from '../../data/successStories'

export default function UclaTransferPage() {
  return (
    <TransferSuccessPage
      heroTitle="社大轉 UCLA 錄取榜單"
      heroSubtitle="加州大學洛杉磯分校 — University of California, Los Angeles"
      stories={successStories.ucla}
      ctaHeading="你也能成為下一個 UCLA 學生"
    />
  )
}
