export const navItems = [
  { label: '首頁', path: '/' },
  {
    label: '留學方案',
    path: '/programs',
    children: [
      { label: '社區大學轉學名校', path: '/programs/community-college' },
      { label: '美加藤校築夢計畫', path: '/programs/ivy-league' },
      { label: '英、澳、新築夢計畫', path: '/programs/uk-aus-nz' },
    ],
  },
  {
    label: '夢想榜單',
    path: '/success',
    children: [
      { label: '社大轉 UCLA', path: '/success/ucla' },
      { label: '社大轉 UCB', path: '/success/ucb' },
      { label: 'TAG 保錄取', path: '/success/tag' },
    ],
  },
  { label: '夢校與課程', path: '/schools' },
  { label: '築夢導師', path: '/team' },
  { label: '經濟入夢', path: '/tuition' },
  { label: '夢想手續與簽證', path: '/visa' },
  { label: '專業家教', path: '/tutoring' },
  { label: '移夢他國', path: '/immigration' },
  { label: '遊學四海', path: '/study-tour' },
]
