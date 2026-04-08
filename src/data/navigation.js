export const navItems = [
  { label: '首頁', path: '/' },
  {
    label: '逐夢方案',
    path: '/programs',
    children: [
      { label: '社區大學轉學名校', path: '/programs/community-college' },
      { label: '美加藤校築夢計畫', path: '/programs/ivy-league' },
      { label: '英、澳、新築夢計畫', path: '/programs/uk-aus-nz' },
    ],
  },
  { label: '申請落點分析', path: '/apply-analysis' },
  { label: '夢校與課程', path: '/schools' },
  { label: '築夢導師', path: '/team' },
  { label: '經濟入夢', path: '/tuition' },
  { label: '夢想手續與簽證', path: '/visa' },
  { label: '專業家教', path: '/tutoring' },
  { label: '移夢他國', path: '/immigration' },
  { label: '遊學四海', path: '/study-tour' },
]
