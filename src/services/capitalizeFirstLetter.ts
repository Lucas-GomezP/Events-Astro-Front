export const capitalizeFirstLetter = (word: string) => {
  const capitalized = word.charAt(0).toUpperCase() + word.slice(1)
  return capitalized
}

export const capitalizeAllFirstLetter = (word: string) => {
  const words = word.split(' ')
  const wordsCapitalized: string[] = []
  words.forEach(w => {
    wordsCapitalized.push(w.charAt(0).toUpperCase() + w.slice(1))
  })
  const capitalized = wordsCapitalized.join(' ')
  return capitalized
}