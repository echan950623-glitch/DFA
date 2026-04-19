import TransferSuccessPage from '../../components/shared/TransferSuccessPage'
import { successStories } from '../../data/successStories'

export default function UcbTransferPage() {
  return (
    <TransferSuccessPage
      heroTitle="社大轉 UCB 錄取榜單"
      heroSubtitle="加州大學伯克利分校 — University of California, Berkeley"
      stories={successStories.ucb}
      ctaHeading="你也能成為下一個 UCB 學生"
    />
  )
}
