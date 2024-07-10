import spanish from '@/i18n/es.json'
import english from '@/i18n/en.json'

export function getI18n(local: string) {
  if (local === 'es') return spanish
  else if (local === 'en') return english
  return spanish
}
