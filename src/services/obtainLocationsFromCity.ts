import { type Event } from '../../lib/data.ts'

export const obtainLocationsFromCity = (events: Event[], city: string) => {
  const locationsByCity: string[] = []

  events.forEach(event => {
    if (city !== 'all') {
      if (!locationsByCity.includes(event.location.toLowerCase()) && event.city.toLowerCase() === city) {
        locationsByCity.push(event.location.toLowerCase())
      }
    } else {
      if (!locationsByCity.includes(event.location.toLowerCase())) {
        locationsByCity.push(event.location.toLowerCase())
      }
    }
  })

  locationsByCity.push('all')

  return locationsByCity
}