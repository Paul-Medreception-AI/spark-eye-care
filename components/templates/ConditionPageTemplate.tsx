// Conditions share the exact same content schema and layout as services, so the
// ConditionPageTemplate is a thin alias over ServicePageTemplate. Keeping a
// distinct export name keeps the [slug] routes + silo-builder fileMap explicit
// (services → services.ts, conditions → conditions.ts) while avoiding duplicated
// JSX. The `hubLabel`/`hubHref`/`ctaHeading` on each entry drive the wording.
import {
  ServicePageTemplate,
  buildServiceMetadata,
  type ServicePageContent,
} from './ServicePageTemplate'

export type ConditionPageContent = ServicePageContent

export function buildConditionMetadata(c: ConditionPageContent) {
  return buildServiceMetadata(c)
}

export function ConditionPageTemplate({ c }: { c: ConditionPageContent }) {
  return <ServicePageTemplate c={c} />
}
