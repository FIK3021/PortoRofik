import { useEffect, useState } from 'react'
import { profile, project, designs, certs, skills, timeline, achievements } from './data.js'

const NAV = [['tentang', 'Tentang'], ['project', 'Project'], ['sertifikat', 'Sertifikat'], ['desain', 'Desain'], ['skills', 'Skills'], ['pengalaman', 'Pengalaman'], ['kontak', 'Kontak']]
const hideBroken = (e) => { e.currentTarget.style.display = 'none' }

function useRoute() {
  const get = () => window.location.hash.replace('#', '')
  const [route, setRoute] = useState(get())
  useEffect(() => {
    const on = () => setRoute(get())
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])
  return route
}

function Lightbox({ item, onClose }) {
  useEffect(() => {
    if (!item) return
    const k = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', k)
    return () => window.removeEventListener('keydown', k)
  }, [item])
  if (!item) return null
  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.title} onClick={onClose}>
      <div className="lb-box" onClick={(e) => e.stopPropagation()}>
        <img src={item.src} alt={item.title} onError={hideBroken} />
        <p><strong>{item.title}</strong>{item.caption && <><br />{item.caption}</>}</p>
        <button className="btn" onClick={onClose}>Tutup</button>
      </div>
    </div>
  )
}

function Header({ go }) {
  const [open, setOpen] = useState(false)
  const nav = (id) => { setOpen(false); go(id) }
  return (
    <header className="header">
      <a className="brand" href="#" onClick={(e) => { e.preventDefault(); nav('') }}>Ahmad Rofik Harahap<span>.</span></a>
      <button className="menu-btn" aria-expanded={open} onClick={() => setOpen(!open)}>Menu</button>
      <nav className={open ? 'nav open' : 'nav'}>
        {NAV.map(([id, label]) => <a key={id} href={`#${id}`} onClick={(e) => { e.preventDefault(); nav(id) }}>{label}</a>)}
      </nav>
    </header>
  )
}

function Hero() {
  const total = project.tests.length
  return (
    <section className="hero">
      <div className="hero-in">
        <div className="hero-text">
          <p className="kicker">{profile.location}</p>
          <h1>{profile.name}</h1>
          <p className="role">{profile.role}</p>
          <p className="lead">{profile.tagline}</p>
          <div className="actions">
            <a className="btn primary" href="#project">Lihat project</a>
            <a className="btn ghost" href={profile.cv} download>Unduh CV</a>
            <a className="btn ghost" href="#kontak">Hubungi saya</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="frame"><img src={profile.photo} alt={`Foto ${profile.name}`} onError={hideBroken} /></div>
        </div>
      </div>
    </section>
  )
}

function Section({ id, title, intro, children, alt }) {
  return (
    <section id={id} className={alt ? 'section alt' : 'section'}>
      <div className="wrap">
        <h2>{title}</h2>
        {intro && <p className="intro">{intro}</p>}
        {children}
      </div>
    </section>
  )
}

function About() {
  const e = profile.education
  return (
    <Section id="tentang" title="Tentang saya">
      <div className="about">
        <div>{profile.about.map((p, i) => <p key={i}>{p}</p>)}</div>
        <dl className="edu">
          <dt>Pendidikan</dt><dd>{e.major}, {e.school}</dd>
          <dt>Periode</dt><dd>{e.years}</dd>
          <dt>IPK</dt><dd>{e.gpa}</dd>
          <dt>Fokus</dt><dd>Web Development, Software Quality Assurance, Cloud Computing</dd>
        </dl>
      </div>
    </Section>
  )
}

function Projects({ open }) {
  const h = project.haki
  return (
    <Section id="project" title="Project" alt intro="SIMAKDORO PROJECT">
      <article className="featured">
        <div className="f-main">
          <div className="badges">{project.badges.map((b) => <span key={b} className="badge">{b}</span>)}</div>
          <h3>{project.title}: {project.subtitle}</h3>
          <p>{project.summary}</p>
          <p className="stack">{project.stack.join(', ')}</p>
          <div className="actions">
            <a className="btn primary" href={`#/project/${project.slug}`}>Baca studi kasus</a>
            {project.links.map((l) => <a key={l.href} className="btn" href={l.href} target="_blank" rel="noreferrer">{l.label}</a>)}
          </div>
        </div>
        <button className="haki" onClick={() => open({ src: h.src, title: h.title, caption: 'Hak Cipta (HAKI), 2026' })} aria-label="Perbesar sertifikat HAKI">
          <span className="haki-img"><img src={h.src} alt={h.title} onError={hideBroken} /><span className="ph">Sertifikat HAKI</span></span>
          <strong>{h.title}</strong>
          <small>Klik untuk memperbesar</small>
        </button>
      </article>
    </Section>
  )
}

function Certs({ open }) {
  const cats = ['Semua', ...new Set(certs.map((c) => c.category))]
  const [cat, setCat] = useState('Semua')
  const [all, setAll] = useState(false)
  const list = certs.filter((c) => cat === 'Semua' || c.category === cat)
  const shown = all ? list : list.slice(0, 6)
  return (
    <Section id="sertifikat" title="Sertifikat" intro={`${certs.length} sertifikat pelatihan dan kelas yang saya selesaikan.`}>
      <div className="filters" role="group" aria-label="Filter sertifikat">
        {cats.map((c) => <button key={c} className={c === cat ? 'chip on' : 'chip'} aria-pressed={c === cat} onClick={() => { setCat(c); setAll(false) }}>{c}</button>)}
      </div>
      <div className="grid">
        {shown.map((c) => (
          <article key={c.title} className="card">
            <button className="thumb" onClick={() => open({ src: c.img, title: c.title, caption: `${c.issuer} · ${c.year}` })} aria-label={`Perbesar ${c.title}`}>
              <img src={c.img} alt={c.title} loading="lazy" onError={hideBroken} /><span className="ph">{c.category}</span>
            </button>
            <div className="card-body">
              <h3>{c.title}</h3>
              <p className="muted">{c.issuer} · {c.year}</p>
              {c.url && <a href={c.url} target="_blank" rel="noreferrer">Lihat kredensial</a>}
            </div>
          </article>
        ))}
      </div>
      {list.length > 6 && <button className="btn more" onClick={() => setAll(!all)}>{all ? 'Tampilkan lebih sedikit' : `Tampilkan semua (${list.length})`}</button>}
    </Section>
  )
}

function Designs({ open }) {
  const cats = ['Semua', ...new Set(designs.map((d) => d.category))]
  const [cat, setCat] = useState('Semua')
  const list = designs.filter((d) => cat === 'Semua' || d.category === cat)
  return (
    <Section id="desain" title="Desain grafis & video" alt intro="Konten publikasi untuk organisasi kampus.">
      <div className="filters" role="group" aria-label="Filter desain">
        {cats.map((c) => <button key={c} className={c === cat ? 'chip on' : 'chip'} aria-pressed={c === cat} onClick={() => setCat(c)}>{c}</button>)}
      </div>
      <div className="grid">
        {list.map((d) => (
          <article key={d.title} className="card">
            <button className="thumb" onClick={() => open({ src: d.src, title: d.title, caption: `${d.org} · ${d.tool}` })} aria-label={`Perbesar ${d.title}`}>
              <img src={d.src} alt={d.title} loading="lazy" onError={hideBroken} /><span className="ph">{d.category}</span>
            </button>
            <div className="card-body"><h3>{d.title}</h3><p className="muted">{d.org} · {d.tool}</p></div>
          </article>
        ))}
      </div>
    </Section>
  )
}

function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="skills">
        {skills.map((s) => (
          <div key={s.group} className="skill-group">
            <h3>{s.group}</h3>
            <div className="tags">{s.items.map((i) => <span key={i}>{i}</span>)}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Experience() {
  return (
    <Section id="pengalaman" title="Pengalaman & pencapaian" alt>
      <div className="two">
        <div>
          <h3>Organisasi</h3>
          <ol className="timeline">
            {timeline.map((t) => (
              <li key={t.title}><time>{t.year}</time><div><h4>{t.title}</h4><p className="place">{t.place}</p><p>{t.text}</p></div></li>
            ))}
          </ol>
        </div>
        <div>
          <h3>Pencak silat</h3>
          <ul className="ach">{achievements.map((a) => <li key={a.text}><time>{a.year}</time><span>{a.text}</span></li>)}</ul>
        </div>
      </div>
    </Section>
  )
}

function Contact() {
  return (
    <Section id="kontak" title="Kontak">
      <p className="lead">Terbuka untuk magang dan posisi junior di bidang web development dan software quality assurance.</p>
      <div className="actions">
        <a className="btn primary" href={`mailto:${profile.email}`}>Kirim email</a>
        <a className="btn" href={profile.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
        <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        {profile.github && <a className="btn" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>}
        <a className="btn" href={profile.cv} download>Unduh CV</a>
      </div>
    </Section>
  )
}

function CaseStudy({ open }) {
  const p = project
  const groups = ['Semua', ...new Set(p.tests.map((t) => t.group))]
  const [g, setG] = useState('Semua')
  const rows = p.tests.filter((t) => g === 'Semua' || t.group === g)
  return (
    <main className="wrap case">
      <a className="back" href="#project">← Kembali ke portofolio</a>
      <div className="badges">{p.badges.map((b) => <span key={b} className="badge">{b}</span>)}</div>
      <h1>{p.title}</h1>
      <p className="role">{p.subtitle} · {p.year}</p>
      <p className="lead">{p.summary}</p>
      <div className="actions">
        {p.links.map((l) => <a key={l.href} className="btn primary" href={l.href} target="_blank" rel="noreferrer">{l.label}</a>)}
        <button className="btn" onClick={() => open({ src: p.haki.src, title: p.haki.title, caption: 'Hak Cipta (HAKI), 2026' })}>Lihat sertifikat HAKI</button>
      </div>

      <h2>Masalah</h2><p>{p.problem}</p>
      <h2>Solusi</h2><p>{p.solution}</p>
      <h2>Fitur utama</h2>
      <div className="tags">{p.modules.map((m) => <span key={m}>{m}</span>)}</div>

      {p.screenshots.length > 0 && (<><h2>Tampilan aplikasi</h2>
        <div className="grid">{p.screenshots.map((s) => <figure key={s.src} className="shot"><img src={s.src} alt={s.caption} loading="lazy" /><figcaption>{s.caption}</figcaption></figure>)}</div></>)}

      <h2>Proses pengerjaan</h2>
      <p>{p.methodNote}</p>
      <ol className="steps">{p.process.map((s) => <li key={s.title}><strong>{s.title}</strong><span>{s.text}</span></li>)}</ol>

      <h2>Hasil User Acceptance Test</h2>
      <p>Diuji pada {p.uat.date} di {p.uat.place} oleh {p.uat.by}. Seluruh {p.tests.length} skenario berstatus berhasil.</p>
      <div className="filters" role="group" aria-label="Filter modul">
        {groups.map((x) => <button key={x} className={x === g ? 'chip on' : 'chip'} aria-pressed={x === g} onClick={() => setG(x)}>{x}</button>)}
      </div>
      <div className="table-wrap">
        <table>
          <thead><tr><th>No</th><th>Kode</th><th>Pengujian</th><th>Hasil yang diharapkan</th><th>Status</th></tr></thead>
          <tbody>{rows.map((t) => (
            <tr key={t.no}><td>{t.no}</td><td>{t.id}</td><td><strong>{t.name}</strong></td><td>{t.expected}</td><td><span className="pill">{t.status}</span></td></tr>
          ))}</tbody>
        </table>
      </div>

      <h2>Teknologi</h2>
      <div className="tags">{p.stack.map((s) => <span key={s}>{s}</span>)}</div>
    </main>
  )
}

export default function App() {
  const route = useRoute()
  const [lb, setLb] = useState(null)
  const isCase = route.startsWith('/project/')
  const go = (id) => {
    if (window.location.hash.startsWith('#/')) window.location.hash = id
    setTimeout(() => (id ? document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) : window.scrollTo({ top: 0, behavior: 'smooth' })), 40)
  }
  useEffect(() => {
    if (isCase) window.scrollTo(0, 0)
    else if (route) setTimeout(() => document.getElementById(route)?.scrollIntoView(), 40)
  }, [route])
  return (
    <>
      <a className="skip" href="#konten">Lewati ke konten</a>
      <Header go={go} />
      <div id="konten">
        {isCase ? <CaseStudy open={setLb} /> : (
          <main><Hero /><About /><Projects open={setLb} /><Certs open={setLb} /><Designs open={setLb} /><Skills /><Experience /><Contact /></main>
        )}
      </div>
      <footer className="footer">© {new Date().getFullYear()} {profile.name}</footer>
      <Lightbox item={lb} onClose={() => setLb(null)} />
    </>
  )
}
