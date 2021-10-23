import { useState } from 'react';

type vaccines = "Pfizer" | "Moderna" | "Aztra Zeneca" | "Sinopharm" | "Sinovac" | "J&J" | "Sputnik V"

export const useVaccination = (vacine: vaccines) => {
  const [dose, setDose] = useState(0)
  const getVaccination = () => {
    setDose(() => dose + 1)
  }

  const getVaccinated = () => {
    return dose
  }

  const getCertificate = () => {
    return `You've got ${vacine} for ${dose} dose`
  }

  return {
    getVaccination,
    getVaccinated,
    getCertificate,
  }
}