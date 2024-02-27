import { type Event } from '../../lib/data.ts'

export const obtainAllYears = (events: Event[]) => {
  let allYears: string[] = []
  events.forEach(event => {
    const startDate = new Date(event.dateStart)
    if (!allYears.includes(startDate.getFullYear().toString())) {
      allYears.push(startDate.getFullYear().toString())
    }
  })
  return allYears
}