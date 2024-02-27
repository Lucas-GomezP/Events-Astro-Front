import { type Event } from '../../lib/data.ts'

import { obtainAllYears } from './obtainAllYears'
import { obtainAllMonths } from './obtainAllMonths'
import { obtainAllCitys } from './obtainAllCitys'
import { obtainAllLocations } from './obtainAllLocations'
import { obtainAllTags } from './obtainAllTags'

export const createFilterParams = (events: Event[]) => {
  const allYears = obtainAllYears(events)
  const allMonths = obtainAllMonths(events)
  const allCitys = obtainAllCitys(events)
  const allLocations = obtainAllLocations(events)
  const allTags = obtainAllTags(events)

  allYears.push('all')
  allMonths.push('all')
  allCitys.push('all')
  allLocations.push('all')
  allTags.push('all')

  const allParams: any[] = []
  
  allYears.forEach(year => {
    allMonths.forEach(month => {
      allCitys.forEach(city => {
        allLocations.forEach(location => {
          allTags.forEach(tag => {
            allParams.push({params: {year, month, city, location, tag}})
          })
        })
      })
    })
  })
  
  return allParams
}

/*

[
  {params: {year: number, month: number, city: string, location: string, tag: string}}
]

*/

// return [
//   {params: {lang: 'en', version: 'v1'}},
//   {params: {lang: 'fr', version: 'v2'}}
// ];