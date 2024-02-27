import { type Event } from '../../lib/data.ts'

export const obtainEventsId = (events: Event[]) => {
  let eventsId: string[] = []
  events.forEach(event => {
    eventsId.push(event.id)
  })
  return eventsId
}