import { type Event } from '../../lib/data.ts'

export const obtainAllTags = (events: Event[]) => {
  let allTags: string[] = []
  events.forEach(event => {
    event.tags.forEach(tag => {
      if (!allTags.includes(tag.toLowerCase())) {
        allTags.push(tag.toLowerCase())
      }
    })
  })
  return allTags
}