module.exports = ({ CuentaRepository }) => {
    return async ({ id }) => {
        console.log("ID =>", id)
      if (!id) throw new Error('La persona no exite')
      return CuentaRepository.porcadapersonasaldo(id)
    }
  }