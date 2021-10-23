export const useThaiDate = () => {
  const thaiDate = (date: string | Date) => {
    if(!date) return `Invalid date`

    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      year: "numeric"
    }
    
    if(date instanceof Date) return date.toLocaleDateString('th-TH', options)
    return new Date(date).toLocaleDateString('th-TH', options)
  }

  return { thaiDate }
}