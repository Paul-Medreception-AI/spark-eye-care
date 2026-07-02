import { MetadataRoute } from 'next'
import { readdirSync, statSync } from 'fs'
import { join } from 'path'

const BASE = 'https://sparkeyetx.com'
const APP_DIR = join(process.cwd(), 'app')

const EXCLUDE_SEGMENTS = new Set([
  'api',
  'sitemap.xml',
  'robots.txt',
])

const PRIORITY_MAP: Record<string, number> = {
  '': 1.0,
  'services': 0.9,
  'conditions': 0.9,
  'contact': 0.85,
  'about': 0.8,
  'team': 0.8,
  'telehealth': 0.8,
  'locations': 0.8,
  'faq': 0.7,
  'insurance': 0.7,
  'new-patients': 0.7,
  'blog': 0.7,
  'reviews': 0.7,
  'compare': 0.75,
  'privacy': 0.3,
  'terms': 0.3,
  'sms-terms': 0.3,
  'accessibility': 0.3,
}

const CHANGE_FREQ_MAP: Record<string, MetadataRoute.Sitemap[number]['changeFrequency']> = {
  '': 'daily',
  'services': 'weekly',
  'conditions': 'weekly',
  'blog': 'monthly',
  'compare': 'monthly',
  'locations': 'monthly',
}

function scanPages(dir: string, prefix = ''): string[] {
  const routes: string[] = []
  let entries: string[]
  try { entries = readdirSync(dir) } catch { return routes }

  const hasPage = entries.some(e => e === 'page.tsx' || e === 'page.ts' || e === 'page.jsx' || e === 'page.js')
  if (hasPage) routes.push(prefix)

  for (const entry of entries) {
    if (EXCLUDE_SEGMENTS.has(entry)) continue
    // Skip route groups (paren), private dirs (underscore), files, and dynamic segments
    if (entry.startsWith('(') || entry.startsWith('_') || entry.startsWith('.') || entry.startsWith('[')) continue
    const full = join(dir, entry)
    let st
    try { st = statSync(full) } catch { continue }
    if (!st.isDirectory()) continue
    routes.push(...scanPages(full, prefix ? `${prefix}/${entry}` : entry))
  }
  return routes
}

function priorityFor(route: string): number {
  const top = route.split('/')[0] || ''
  if (route === '') return PRIORITY_MAP[''] ?? 0.5
  // Nested pages inherit a slightly lower priority than their section index
  const base = PRIORITY_MAP[top] ?? 0.6
  return route.includes('/') ? Math.max(base - 0.05, 0.5) : base
}

function changeFreqFor(route: string): MetadataRoute.Sitemap[number]['changeFrequency'] {
  const top = route.split('/')[0] || ''
  return CHANGE_FREQ_MAP[top] ?? 'monthly'
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const routes = scanPages(APP_DIR)
  return routes
    .sort()
    .map(route => ({
      url: route ? `${BASE}/${route}` : BASE,
      lastModified: now,
      changeFrequency: changeFreqFor(route),
      priority: priorityFor(route),
    }))
}
