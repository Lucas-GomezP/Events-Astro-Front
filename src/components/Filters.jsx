import { useEffect, useState } from "react"

import { capitalizeFirstLetter } from '../services/capitalizeFirstLetter'
import { capitalizeAllFirstLetter } from '../services/capitalizeFirstLetter'
import { obtainFiltersEvents } from '../services/obtainFiltersEvents'

import { obtainAllYears } from '../services/obtainAllYears'
import { obtainAllMonths } from '../services/obtainAllMonths'
import { obtainAllCitys } from '../services/obtainAllCitys'
import { obtainAllLocations } from '../services/obtainAllLocations'
import { obtainAllTags } from '../services/obtainAllTags'

export const Filter = ({events}) => {

  const [allYears, setAllYears] = useState([])
  const [allMonths, setAllMonths] = useState([])
  const [allCitys, setAllCitys] = useState([])
  const [allLocations, setAllLocations] = useState([])
  const [allTags, setAllTags] = useState([])

  const [actualYear, setActualYear] = useState('all')
  const [actualMonth, setActualMonth] = useState('all')
  const [actualCity, setActualCity] = useState('all')
  const [actualLocation, setActualLocation] = useState('all')
  const [actualTag, setActualTag] = useState('all')

  useEffect(() => {
    const newAllYears = obtainAllYears(events)
    newAllYears.push('all')
    setAllYears(newAllYears)
    const newAllMonths = obtainAllMonths(events)
    newAllMonths.push('all')
    setAllMonths(newAllMonths)
    const newAllCitys = obtainAllCitys(events)
    newAllCitys.push('all')
    setAllCitys(newAllCitys)
    const newAllLocations = obtainAllLocations(events)
    newAllLocations.push('all')
    setAllLocations(newAllLocations)
    const newAllTags = obtainAllTags(events)
    newAllTags.push('all')
    setAllTags(newAllTags)
  }, [events])

  const handleYearChange = (e) => {
    const newActualYear = e.target.value
    setActualYear(newActualYear)
  }
  const handleMonthChange = (e) => {
    const newActualMonth = e.target.value
    setActualMonth(newActualMonth)
  }
  const handleCityChange = (e) => {
    const newActualCity = e.target.value
    setActualCity(newActualCity)
  }
  const handleLocationChange = (e) => {
    const newActualLocation = e.target.value
    setActualLocation(newActualLocation)
  }
  const handleTagChange = (e) => {
    const newActualTag = e.target.value
    setActualTag(newActualTag)
  }

  const clearFilters = () => {
    setActualYear('all')
    setActualMonth('all')
    setActualCity('all')
    setActualLocation('all')
    setActualTag('all')
  }

  return (
    <section className="">
      <h1 className="text-white text-3xl font-bold">Filtros</h1>
      <div className="grid grid-cols-1 max-w-[500px] md:grid-cols-2 gap-2 md:max-w-[1000px] mx-auto">
        <SelectContainer 
          lbl="Año del evento:" 
          forHtml="year" 
          handle={handleYearChange}
        >
            {
              allYears.map(year => {
                if (year === 'all') {
                  return <option value="all" selected key={year}>Todos</option>
                } else {
                  return <option value={year} key={year}>{year}</option>
                }
              })
            }
        </SelectContainer>
        <SelectContainer 
          lbl="Mes del evento:" 
          forHtml="month" 
          handle={handleMonthChange}
        >
            {
              allMonths.map(month => {
                if (month === 'all') {
                  return <option value="all" selected key={month}>Todos</option>
                } else {
                  const m = new Date()
                  m.setMonth(parseInt(month) - 1)
                  return <option value={month} key={month}>{capitalizeFirstLetter(m.toLocaleString('es-ES', {month: 'long'}))}</option>
                }
              })
            }
        </SelectContainer>
        <SelectContainer 
          lbl="Ciudad:" 
          forHtml="city" 
          handle={handleCityChange}
        >
            {
              allCitys.map(city => {
                if (city === 'all') {
                  return <option value="all" selected key={city}>Todas</option>
                } else {
                  return <option value={city} key={city}>{capitalizeAllFirstLetter(city)}</option>
                }
              })
            }
        </SelectContainer>
        <SelectContainer 
          lbl="Locacion:" 
          forHtml="location" 
          handle={handleLocationChange}
        >
            {
              allLocations.map(location => {
                if (location === 'all') {
                  return <option value="all" selected key={location}>Todas</option>
                } else {
                  return <option value={location} key={location}>{capitalizeAllFirstLetter(location)}</option>
                }
              })
            }
        </SelectContainer>
        <SelectContainer 
          lbl="Etiqueta:" 
          forHtml="tag" 
          handle={handleTagChange}
        >
            {
              allTags.map(tag => {
                if (tag === 'all') {
                  return <option value="all" selected>Todas</option>
                } else {
                  return <option value={tag}>{capitalizeAllFirstLetter(tag)}</option>
                }
              })
            }
        </SelectContainer>
        <button onClick={clearFilters}>
          Limpiar filtros
        </button>
      </div>
      <a
        className="text-white bg-zinc-700/50 p-2 rounded-xl border-2 border-transparent hover:border-zinc-700/50 hover:bg-zinc-200 hover:text-zinc-700 flex justify-center text-xl mt-2 mb-4 font-semibold"
        href={`/search/${actualYear}-${actualMonth}-${actualCity}-${actualLocation}-${actualTag}`}
      >
        Buscar evento
      </a>
      </section>
  )
}

const SelectContainer = ({children, lbl, forHtml, handle}) => {
  return (
    <div className="flex items-center justify-between">
      <label 
        className="text-white/80 font-semibold text-xl" 
        htmlFor={forHtml}
      >
        {lbl}
      </label>
      <select 
        className="p-1 rounded-md focus:outline-0 w-28 truncate"
        name={lbl} 
        id={`${lbl}-select`}
        onChange={handle}
      >
        {children}
      </select>
    </div>
  )
}