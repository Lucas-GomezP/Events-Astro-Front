import { type Event } from '../../lib/data.ts'

export const obtainAllLocations = (events: Event[]) => {
  let allLocations: string[] = []
  events.forEach(event => {
    if (!allLocations.includes(event.location.toLowerCase())) {
      allLocations.push(event.location.toLowerCase())
    }
  })
  return allLocations
}