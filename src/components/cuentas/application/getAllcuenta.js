module.exports = ({ CuentaRepository }) => {
    return async () => { // parameters
      return CuentaRepository.getAll()
    }
  }