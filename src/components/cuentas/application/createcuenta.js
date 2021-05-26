
module.exports = ({ CuentaRepository }) => {
    return async ({ persona, cuenta, dinero, nombre }) => { 
      const newCuenta = {
        persona: persona,
        cuenta: cuenta,
        nombre: nombre,
        dinero: dinero
      }
      return CuentaRepository.add(newCuenta)
    }
  }