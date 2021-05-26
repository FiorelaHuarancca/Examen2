module.exports = ({ PersonaRepository }) => {
    return async ({ id }) => {
      console.log(id)
      if (!id) throw new Error('Person does not exist')
      return PersonaRepository.delete(id)
    }
  }
  