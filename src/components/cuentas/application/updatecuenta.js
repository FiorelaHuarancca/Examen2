module.exports = ({ CuentaRepository }) => {
    return async ({ id, nombre, cuenta, dinero }) => { // parameters
      const newCuenta = {
        nombre: nombre,
        cuenta: cuenta,
        nombre: nombre,
        dinero: dinero
      }
      return CuentaRepository.update(id, newCuenta)
    }
  }