module.exports = ({ CuentaRepository }) => {
    return async ({ id }) => {
        console.log("ID =>", id)
      if (!id) throw new Error('Entidad no existe')
      return CuentaRepository.porcadapersonasaldo(id)
    }
  }