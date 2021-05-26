module.exports = ({ CuentaRepository }) => {
    return async ({ id }) => {
      console.log(id)
      if (!id) throw new Error('Cuenta does not exist')
      return CuentaRepository.delete(id)
    }
  }
  