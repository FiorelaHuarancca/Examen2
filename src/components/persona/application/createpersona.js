
module.exports = ({ PersonaRepository }) => {
    return async ({ nombre }) => { 
      const newPersona = {
        nombre: nombre
      }
      return PersonaRepository.add(newPersona)
    }
  }