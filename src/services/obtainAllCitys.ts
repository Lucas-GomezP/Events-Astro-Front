import { type Event } from '../../lib/data.ts'

export const obtainAllCitys = (events: Event[]) => {
  let allCitys: string[] = []
  events.forEach(event => {
    if (!allCitys.includes(event.city.toLowerCase())) {
      allCitys.push(event.city.toLowerCase())
    }
  })
  return allCitys
}