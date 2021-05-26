module.exports = ({ CuentaRepository }) => {
    return async ({ id, dinero }) => { 
        
        if (!id) throw new Error('Person does not exist')
        const cuenta = await CuentaRepository.getById(id)
        
        const cuentadinero = parseInt(cuenta.dinero)
        const nuevacuentadinero = cuentadinero - parseInt(dinero)
  
        const nuevaCuenta = {
        dinero: nuevacuentadinero
      }
      return CuentaRepository.update(id, nuevaCuenta)
    }
  }