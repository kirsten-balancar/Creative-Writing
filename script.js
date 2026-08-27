/* ===========================================================
   STARFIELD — ambient background, respects reduced motion
   =========================================================== */
(function starfield(){
  const canvas = document.getElementById('stars');
  const ctx = canvas.getContext('2d');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let stars = [];
  let w, h;

  function resize(){
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    const density = Math.min(140, Math.floor((w * h) / 9000));
    stars = Array.from({ length: density }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.1 + 0.2,
      base: Math.random() * 0.5 + 0.25,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.015 + 0.004
    }));
  }

  function draw(t){
    ctx.clearRect(0, 0, w, h);
    for (const s of stars){
      const flicker = reduceMotion ? s.base : s.base + Math.sin(t * s.speed + s.phase) * 0.25;
      ctx.beginPath();
      ctx.fillStyle = `rgba(242,234,217,${Math.max(0, flicker)})`;
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    }
    if (!reduceMotion) requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  resize();
  requestAnimationFrame(draw);
})();

/* ===========================================================
   CONTENT DATA
   =========================================================== */
const recentWorks = [
  { title: "Practical Research 2", type: "Research · Grade 12", url: "https://docs.google.com/document/d/1uviK4QnZ7SadeeiCYRUJk3dipCorynUpujpkBe46cRk/edit?usp=sharing" },
  { title: "Pax and Plow", type: "Feature Article", url: "https://docs.google.com/document/d/1PikcVIIJ7pQCO9xwCFmv4tEEN0IzFz1ti4QQvREXO2M/edit?usp=sharing" },
  { title: "Ari-SONA B, B is for Budol", type: "Reflection from SONA", url: "https://docs.google.com/document/d/1R9gVwB8slHq9ZHEVQ_AAUIUTnDrCSF7m2YLmENJwNek/edit?usp=sharing" },
  { title: "As Above, So Within", type: "Poem", url: "https://docs.google.com/document/d/1Aw-va824x02S9bYzzww-CajCYkYt2qrT0U8MFMpuUFw/edit?usp=sharing" },
  { title: "What Stars Have Witnessed", type: "Ateneo: Pathways Essay", url: "https://docs.google.com/document/d/1V6-nihWrAQ6T8E55x8hSrzezYtXVtHlORPec6aKosrY/edit?usp=sharing" },
  { title: "Practical Research 1", type: "Research · Grade 11", url: "https://docs.google.com/document/d/1Qps880380P6ugv92Bq_BPVDEK6lr-2r9f-GmV4tqFq0/edit?usp=sharing" }
];

const prominentWorks = [
  { title: "Two Sides of the Same Coin", url: "https://docs.google.com/document/d/1xEsQ1RzhIeJ-pyYRKtYP44HdM8Nv3aq7ViNP1V7AD4s/edit?usp=drivesdk" },
  { title: "Slow Response is No Response", url: "https://docs.google.com/document/d/1LiH6mbKl3Tv3Vvhrs4u9GBLixZa59MJ0X41EGC20hx8/edit?usp=drivesdk" },
  { title: "Living Realities Between Truths and Dires", url: "https://docs.google.com/document/d/13z2_HwJ9BoXqnFsH5YSwFpQaHvWim5l1tXW6bKeDZ7w/edit?usp=drivesdk" },
  { title: "Names Forever Etched In the Wind", url: "https://docs.google.com/document/d/1WGcbKWWYpDKoNPCoZL6dmmBZwlmz_98PA2qIEp6Mims/edit?usp=drivesdk" },
  { title: "Double-Edged Sword of Living Scarcity", url: "https://docs.google.com/document/d/1rf7ZvQEXur3bYuuyiMbfg70CVxgYV9tfV84CLESTwkQ/edit?usp=drivesdk" },
  { title: "Feathers of Greed, Wings from Graft", url: "https://docs.google.com/document/d/1n1tOTqBtOTZQGiDvpSD909bYV3tJ0BDlHP-1YNpfz2U/edit?usp=drivesdk" },
  { title: "Paralyzing Pain", url: "https://docs.google.com/document/d/11Y4kQv9lAa6yVd5t7XJ9saACq16CmpYNHnmcHqWZPy0/edit?usp=drivesdk" },
  { title: "Etched Forever in History", url: "https://docs.google.com/document/d/1uRIJR6XnvHu2Tts51f_q9dPr9Hlh33WpGQqDBbBnLsk/edit?usp=drivesdk" },
  { title: "Chasing Deadline, Trading Triumphs", url: "https://docs.google.com/document/d/1Uyt4svpO-D7oaZuyTiee6fKNDtOHN8Mz1om_fxslQ4k/edit?usp=drivesdk" },
  { title: "Living in Poisoned Wealth", url: "https://docs.google.com/document/d/1aeYz52N3RyoWnQaWhq7-xheg2W9MYLvDCvdCqdApNA4/edit?usp=drivesdk" },
  { title: "Loophole of Dilemma", url: "https://docs.google.com/document/d/1OdJh9SeGb9nWMgIlZxJhgfkIm0AL8iFMBAnWyphGbnU/edit?usp=drivesdk" },
  { title: "Price of Knowledge", url: "https://docs.google.com/document/d/1gOirZZwmv5X4urE7zH_IP1XNxtMySuU7m-sO3gYzqIM/edit?usp=drivesdk" },
  { title: "Money Down the Drain", url: "https://docs.google.com/document/d/1B7RXsd49wGulUtzqu0-5Cc7VjiIlkF6R6b4O2y7tRWg/edit?usp=drivesdk" }
];

const members = [
  {
    id: "clark",
    name: "Clark Delos Reyes",
    alias: "Kuya Clark",
    section: "12 HUMSS – Kalinga",
    who: "a playful, daffy, and oftentimes silent individual.",
    workTitle: "The Blue Flowers",
    canva: "https://canva.link/9ilra4sb747zydf",
    essence: "The transformative power of consistent kindness, care, and hope — how small, everyday actions can cultivate beauty and resilience in difficult environments.",
    description: "A short story about Maya, a young student who discovers a garden that teaches her the value of kindness, patience, care, and hope. The blue flowers become a symbol of how small acts of care can create beauty and inspire an entire community."
  },
  {
    id: "reziel",
    name: "Rezielyn Pestilos",
    alias: "the “basher”",
    section: "12 HUMSS – Kalinga",
    who: "an amusing, jolly, and sometimes bold individual.",
    workTitle: "A Quiet Kind of Love",
    canva: "https://canva.link/kovvn6stmnc1bn8",
    essence: "Genuine romance doesn't rely on grand, performative gestures. Lasting love is a conscious, daily commitment grounded in simple kindness, trust, and shared stillness through life's changing seasons.",
    description: "A poem about gentle intimacy, trust, kindness, and the quiet moments that make love meaningful — presenting love as a conscious choice to care, stay, and grow together."
  },
  {
    id: "cristina",
    name: "Cristina Pagaduan",
    alias: "Tin",
    section: "12 HUMSS – Kalinga",
    who: "a daring, witty, and genuine individual.",
    workTitle: "The Road Only I Could See",
    canva: "https://canva.link/e6bicg942glby17",
    essence: "Personal growth, resilience, and self-discovery through hardship — moving from nighttime uncertainty and doubt into morning clarity, where past scars become the steps that build inner strength.",
    description: "A reflective poem about hardship, resilience, and self-discovery. Its journey from darkness toward morning light represents how struggles and scars can become part of the path that shapes who we become."
  },
  {
    id: "abby",
    name: "Abby Sta. Maria",
    alias: "Ate Abby",
    section: "12 HUMSS – Kalinga",
    who: "a self-sufficient, diligent, and resourceful individual.",
    workTitle: "Mounstrain",
    canva: "https://canva.link/zhrm4lml1lvst84",
    essence: "Environmental destruction caused by pollution and plastic waste — trash rendered as bright, unnatural scars that suffocate wildlife, closing with an urgent call to protect and speak up for nature.",
    description: "An environmental poem addressing pollution and plastic waste through imagery of damaged landscapes. It presents waste as unnatural scars on nature and ends with a call for humanity to protect the environment."
  },
  {
    id: "james",
    name: "James Lucero",
    alias: "“Lebron James”",
    section: "12 HUMSS – Kalinga",
    who: "a reliable, steady, and supportive individual.",
    workTitle: "Admired, Never Possessed",
    canva: "https://canva.link/o7s4aumqwevlo3b",
    essence: "The beauty of unrequited or distant affection — love does not always require ownership or closeness; true appreciation lies in cherishing someone's presence from afar.",
    description: "A reflective piece about distant affection and the beauty of admiring someone without needing to possess them. Through the ocean, moonlight, and stars, it explores the idea that some people are meant to be cherished from afar."
  }
];

/* ===========================================================
   RENDER
   =========================================================== */
function renderRecentWorks(){
  const list = document.getElementById('recent-works');
  list.innerHTML = recentWorks.map(w => `
    <li>
      <a class="work-title" href="${w.url}" target="_blank" rel="noopener noreferrer">${w.title}</a>
      <span class="work-type">${w.type}</span>
    </li>
  `).join('');
}

function renderProminentWorks(){
  const list = document.getElementById('prominent-works');
  list.innerHTML = prominentWorks.map(w => `
    <li>
      <a href="${w.url}" target="_blank" rel="noopener noreferrer">${w.title}</a>
    </li>
  `).join('');
}

function renderChapters(){
  const wrap = document.getElementById('chapters');
  wrap.innerHTML = members.map((m, i) => `
    <article class="chapter reveal" data-member="${m.id}">
      <button class="chapter-head" aria-expanded="false" aria-controls="panel-${m.id}">
        <span class="chapter-num">${String(i + 1).padStart(2, '0')}</span>
        <span class="chapter-head-text">
          <span class="chapter-name">${m.name} · ${m.alias}</span>
          <span class="chapter-title">${m.workTitle}</span>
        </span>
        <span class="chapter-toggle" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 0V14M0 7H14" stroke="currentColor" stroke-width="1.4"/></svg>
        </span>
      </button>
      <div class="chapter-panel" id="panel-${m.id}">
        <div class="chapter-panel-inner">
          <div class="chapter-body">
            <div>
              <p class="chapter-who"><strong>${m.name}</strong>, also called ${m.alias} in ${m.section}, is ${m.who}</p>
              <p class="chapter-work-title">“${m.workTitle}”</p>
              <p class="chapter-desc">${m.description}</p>
              <a class="chapter-link" href="${m.canva}" target="_blank" rel="noopener noreferrer">View on Canva ↗</a>
            </div>
            <div>
              <span class="chapter-label">Essence</span>
              <p class="chapter-desc">${m.essence}</p>
              <span class="chapter-label" style="margin-top:1.1rem;">Palette</span>
              <div class="chapter-palette" aria-hidden="true">
                <span style="background:var(--acc-dim);"></span>
                <span style="background:var(--acc);"></span>
                <span style="background:var(--acc-soft);"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  `).join('');

  wrap.querySelectorAll('.chapter-head').forEach(btn => {
    btn.addEventListener('click', () => {
      const chapter = btn.closest('.chapter');
      const isOpen = chapter.classList.contains('is-open');
      chapter.classList.toggle('is-open', !isOpen);
      btn.setAttribute('aria-expanded', String(!isOpen));
    });
  });
}

renderRecentWorks();
renderProminentWorks();
renderChapters();

/* ===========================================================
   SCROLL REVEAL — fades/slides elements in as they enter view
   =========================================================== */
(function scrollReveal(){
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const targets = document.querySelectorAll('.reveal');

  if (reduceMotion || !('IntersectionObserver' in window)){
    targets.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(el => observer.observe(el));
})();
