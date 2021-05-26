module.exports = ({ PersonaRepository }) => {
    return async () => { // parameters
      return PersonaRepository.getAll()
    }
  }