import {capitalizeFirstLetter} from './capitalizeFirstLetter'

export const dateFormated = ( start: string, end: string ) => {
  const startDate = new Date(start)
  const endDate = new Date(end)
  const startDateFormated = `${startDate.getDate()}/${startDate.getMonth()}/${startDate.getFullYear()}`
  const endDateFormated = `${endDate.getDate()}/${endDate.getMonth()}/${endDate.getFullYear()}`
  return { startDateFormated, endDateFormated }
}

export const dateFormatedText = ( start: string, end: string ) => {
  const startDate = new Date(start)
  const endDate = new Date(end)
  const startDateFormated = `${startDate.getDate()} de ${capitalizeFirstLetter(startDate.toLocaleString('es-ES', {month: 'short'}))} del ${startDate.getFullYear()}`
  const endDateFormated = `${endDate.getDate()} de ${capitalizeFirstLetter(endDate.toLocaleString('es-ES', {month: 'short'}))} del ${endDate.getFullYear()}`
  return { startDateFormated, endDateFormated }
}

export const dateFormatedMinText = ( start: string, end: string ) => {
  const startDate = new Date(start)
  const endDate = new Date(end)
  const startDateFormated = `${startDate.getDate()} de ${capitalizeFirstLetter(startDate.toLocaleString('es-ES', {month: 'short'}))}.`
  const endDateFormated = `${endDate.getDate()} de ${capitalizeFirstLetter(endDate.toLocaleString('es-ES', {month: 'short'}))}.`
  return { startDateFormated, endDateFormated }
}