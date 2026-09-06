// Traduce src/data/content.js (español) a src/data/content.en.js (inglés)
// usando el endpoint público de traducción de Google (el mismo motor neural
// que usa la extensión de Chrome). Correr con `npm run translate` cada vez
// que edites el contenido en español.

import { writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import * as content from '../src/data/content.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT_PATH = path.join(__dirname, '..', 'src', 'data', 'content.en.js')

const cache = new Map()

// El servicio a veces devuelve la primera letra en minúscula para palabras
// sueltas ("Stack" -> "stack"). Si el original arrancaba en mayúscula,
// preservamos esa convención en el resultado.
function matchLeadingCase(original, translated) {
  if (!translated) return translated
  if (/^[A-ZÁÉÍÓÚÑ]/.test(original)) {
    return translated.charAt(0).toUpperCase() + translated.slice(1)
  }
  return translated
}

async function translateText(text) {
  if (typeof text !== 'string' || !text.trim()) return text
  if (cache.has(text)) return cache.get(text)

  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=es&tl=en&dt=t&q=${encodeURIComponent(text)}`
    const res = await fetch(url)
    const data = await res.json()
    const raw = data[0].map((chunk) => chunk[0]).join('') || text
    const result = matchLeadingCase(text, raw)
    cache.set(text, result)
    // Ser amable con el servicio público y gratuito.
    await new Promise((resolve) => setTimeout(resolve, 120))
    return result
  } catch (err) {
    console.warn(`  ! no se pudo traducir "${text}": ${err.message}`)
    cache.set(text, text)
    return text
  }
}

async function tArr(arr) {
  const out = []
  for (const s of arr) out.push(await translateText(s))
  return out
}

async function translateProfile(p) {
  return { ...p, role: await translateText(p.role), badge: await translateText(p.badge) }
}

async function translateNav(items) {
  const out = []
  for (const item of items) out.push({ ...item, label: await translateText(item.label) })
  return out
}

async function translateHero(hero) {
  return {
    ...hero,
    eyebrow: await translateText(hero.eyebrow),
    headline: await tArr(hero.headline),
    highlightWord: await translateText(hero.highlightWord),
    description: await translateText(hero.description),
    ctaPrimary: { ...hero.ctaPrimary, label: await translateText(hero.ctaPrimary.label) },
    ctaSecondary: { ...hero.ctaSecondary, label: await translateText(hero.ctaSecondary.label) },
  }
}

async function translateSections(sections) {
  const out = {}
  for (const [key, section] of Object.entries(sections)) {
    out[key] = {}
    for (const [field, value] of Object.entries(section)) {
      out[key][field] = await translateText(value)
    }
  }
  return out
}

async function translateStats(stats) {
  const out = []
  for (const s of stats) out.push({ ...s, label: await translateText(s.label) })
  return out
}

async function translateStackCategories(cats) {
  const out = []
  for (const cat of cats) {
    const skills = []
    for (const skill of cat.skills) skills.push({ ...skill, label: await translateText(skill.label) })
    out.push({ ...cat, title: await translateText(cat.title), skills })
  }
  return out
}

async function translateExperience(jobs) {
  const out = []
  for (const job of jobs) {
    out.push({
      ...job,
      role: await translateText(job.role),
      period: await translateText(job.period),
      bullets: await tArr(job.bullets),
    })
  }
  return out
}

async function translateEducation(edu) {
  const universidad = []
  for (const item of edu.universidad) {
    universidad.push({
      ...item,
      title: await translateText(item.title),
      badge: await translateText(item.badge),
      description: await translateText(item.description),
      tags: await tArr(item.tags),
    })
  }

  const thesis = {
    ...edu.thesis,
    label: await translateText(edu.thesis.label),
    title: await translateText(edu.thesis.title),
    description: await translateText(edu.thesis.description),
    advisor: await translateText(edu.thesis.advisor),
    achievement: await translateText(edu.thesis.achievement),
  }

  const cursos = []
  for (const c of edu.cursos) {
    cursos.push({ ...c, description: await translateText(c.description) })
  }

  const continuousEvolution = {
    title: await translateText(edu.continuousEvolution.title),
    description: await translateText(edu.continuousEvolution.description),
    publicationsLabel: await translateText(edu.continuousEvolution.publicationsLabel),
    honorsLabel: await translateText(edu.continuousEvolution.honorsLabel),
  }

  const publications = []
  for (const pub of edu.publications) {
    publications.push({ source: await translateText(pub.source), title: await translateText(pub.title) })
  }

  const honors = await tArr(edu.honors)

  return { universidad, thesis, cursos, continuousEvolution, publications, honors }
}

async function translateProjects(list) {
  const out = []
  for (const p of list) {
    out.push({
      ...p,
      category: await translateText(p.category),
      title: await translateText(p.title),
      description: await translateText(p.description),
    })
  }
  return out
}

async function translateContact(contact) {
  return {
    ...contact,
    headline: await tArr(contact.headline),
    highlightWord: await translateText(contact.highlightWord),
    description: await translateText(contact.description),
    form: {
      nameLabel: await translateText(contact.form.nameLabel),
      namePlaceholder: await translateText(contact.form.namePlaceholder),
      emailLabel: await translateText(contact.form.emailLabel),
      emailPlaceholder: await translateText(contact.form.emailPlaceholder),
      messageLabel: await translateText(contact.form.messageLabel),
      messagePlaceholder: await translateText(contact.form.messagePlaceholder),
      submit: await translateText(contact.form.submit),
    },
    status: {
      label: await translateText(contact.status.label),
      lines: await tArr(contact.status.lines),
    },
    socials: contact.socials,
  }
}

async function translateFooter(footer) {
  return { ...footer, tagline: await translateText(footer.tagline) }
}

function serialize(value) {
  return JSON.stringify(value, null, 2)
}

async function main() {
  console.log('Traduciendo src/data/content.js -> content.en.js (vía Google Translate)...')

  const profile = await translateProfile(content.profile)
  const nav = await translateNav(content.nav)
  const hero = await translateHero(content.hero)
  const sections = await translateSections(content.sections)
  const stats = await translateStats(content.stats)
  const stackCategories = await translateStackCategories(content.stackCategories)
  const experience = await translateExperience(content.experience)
  const education = await translateEducation(content.education)
  const projects = await translateProjects(content.projects)
  const contact = await translateContact(content.contact)
  const footer = await translateFooter(content.footer)

  const file = `// Generado automáticamente por scripts/translate-content.mjs
// No lo edites a mano: corré \`npm run translate\` después de editar content.js.

export const profile = ${serialize(profile)}

export const nav = ${serialize(nav)}

export const hero = ${serialize(hero)}

export const sections = ${serialize(sections)}

export const stats = ${serialize(stats)}

export const stackCategories = ${serialize(stackCategories)}

export const experience = ${serialize(experience)}

export const education = ${serialize(education)}

export const projects = ${serialize(projects)}

export const contact = ${serialize(contact)}

export const footer = ${serialize(footer)}
`

  await writeFile(OUT_PATH, file, 'utf-8')
  console.log(`Listo. Contenido en inglés escrito en ${OUT_PATH}`)
}

main()
