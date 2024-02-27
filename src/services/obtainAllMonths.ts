import { type Event } from '../../lib/data.ts'

export const obtainAllMonths = (events: Event[]) => {
  let allMonths: string[] = []
  events.forEach(event => {
    const startDate = new Date(event.dateStart)
    if (!allMonths.includes((startDate.getMonth() + 1).toString())) {
      allMonths.push((startDate.getMonth() + 1).toString())
    }
  })
  return allMonths
}