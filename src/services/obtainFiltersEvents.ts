import { type Event } from '../../lib/data.ts'

export const obtainFiltersEvents = (events: Event[],year: string, month: string, city: string, location: string, tag: string) => {
  const filterEvents = events.filter(e => {
    let controlYear = false
    if (year === 'all') {
      controlYear = true
    } else {
      const startDate = new Date(e.dateStart)
      controlYear = startDate.getFullYear().toString() === year.toString()
    }
  
    let controlMonth = false
    if (month === 'all') {
      controlMonth = true
    } else {
      const startDate = new Date(e.dateStart)
      controlMonth = (startDate.getMonth() + 1).toString() === month.toString()
    }
  
    let controlCity = false
    if (city === 'all') {
      controlCity = true
    } else {
      controlCity = e.city.toLowerCase() === city.toLowerCase()
    }
  
    let controlLocation = false
    if (location === 'all') {
      controlLocation = true
    } else {
      controlLocation = e.location.toLowerCase() === location.toLowerCase()
    }
  
    let controlTag = false
    if (tag === 'all') {
      controlTag = true
    } else {
      const tagsNormalized = e.tags.map(t => t.toLowerCase())
      controlTag = tagsNormalized.includes(tag)
    }
  
    return controlYear && controlMonth && controlCity && controlLocation && controlTag
  })
  return filterEvents
}