module.exports = ({ PersonaRepository }) => {
    return async ({ id, nombre }) => { // parameters
      const newPersona = {
        nombre: nombre
      }
      return PersonaRepository.update(id, newPersona)
    }
  }