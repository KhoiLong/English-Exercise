// Simple static data listing weeks and lessons. Edit this array to add more weeks/lessons.
const data = [
  {
    week: 'Week 1',
    description: 'Basic exercises and quizzes',
    lessons: [
      { title: 'Bài tập 1', path: 'Week 1/bai-tap-1.html' },
      { title: 'Bài tập 2', path: 'Week 1/bai-tap-2.html' },
      { title: 'Bài tập 3', path: 'Week 1/bai-tap-3.html' },
      { title: 'Final Boss', path: 'Week 1/final-boss.html' },
      { title: 'Mini Game', path: 'Week 1/mini-game.html' }
    ]
  },
  {
    week: 'Week 2',
    description: 'Tổng hợp 5 bài: Ôn lại Week 1 + Past Simple + Mixed Review',
    lessons: [
      { title: "1. Penalty Shootout — 5 Q Chốt Hạ Tuần 1", path: 'Week 2/1. bai-tap-1_2.html' },
      { title: "2. Monday Warm-up — 30 Q Ôn Lại (15m)", path: 'Week 2/2. bai-tap-1.html' },
      { title: "3. Check Logic Warm-up — 20 Q Khởi Động", path: 'Week 2/3. ReviewWeek1.html' },
      { title: "4. Past Simple Challenge — 40 Q (20m)", path: 'Week 2/4. BaiTapTuan2_PastSimple.html' },
      { title: "5. Mixed Review — Vocab & Grammar (20 Q)", path: 'Week 2/5. MixedReview_Week2.html' }
    ]
  }
]

const weeksEl = document.getElementById('weeks')
const searchInput = document.getElementById('search')

function render(terms = ''){
  weeksEl.innerHTML = ''
  const q = terms.trim().toLowerCase()
  data.forEach((w, idx) => {
    // filter lessons by query
    const matchingLessons = w.lessons.filter(l => (l.title + ' ' + l.path).toLowerCase().includes(q) || w.week.toLowerCase().includes(q) || (w.description||'').toLowerCase().includes(q))
    if(q && matchingLessons.length === 0) return

    const card = document.createElement('div')
    card.className = 'week-card'

    const header = document.createElement('div')
    header.className = 'week-header'

    const left = document.createElement('div')
    const title = document.createElement('div')
    title.className = 'week-title'
    title.textContent = w.week
    const desc = document.createElement('div')
    desc.className = 'week-desc'
    desc.textContent = w.description || ''

    left.appendChild(title)
    left.appendChild(desc)

    const right = document.createElement('div')
    const toggle = document.createElement('button')
    toggle.className = 'btn'
    toggle.textContent = 'Mở' 
    toggle.addEventListener('click', () => {
      list.classList.toggle('show')
      toggle.textContent = list.classList.contains('show') ? 'Đóng' : 'Mở'
    })

    right.appendChild(toggle)

    header.appendChild(left)
    header.appendChild(right)

    const list = document.createElement('ul')
    list.className = 'lesson-list'

    const lessonsToShow = q ? matchingLessons : w.lessons
    lessonsToShow.forEach(l => {
      const li = document.createElement('li')
      li.className = 'lesson-item'
      const a = document.createElement('a')
      a.href = l.path
      a.textContent = l.title
      a.title = l.path
      // open in same tab so GitHub Pages serves correctly
      a.target = '_self'

      const meta = document.createElement('div')
      meta.className = 'small'
      meta.textContent = l.path

      li.appendChild(a)
      li.appendChild(meta)
      list.appendChild(li)
    })

    card.appendChild(header)
    card.appendChild(list)
    weeksEl.appendChild(card)
  })
}

searchInput.addEventListener('input', (e) => render(e.target.value))

// initial render
render()

// Helpful: press Enter on search to toggle first matching week
searchInput.addEventListener('keydown', (e) => {
  if(e.key === 'Enter'){
    const firstToggle = document.querySelector('.week-card .btn')
    if(firstToggle) firstToggle.click()
  }
})