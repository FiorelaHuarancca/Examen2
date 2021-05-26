const MongoCuentaRepository = require('./infraestructure/MongoCuentaRepository')
const createCuenta = require('./application/createcuenta')
const getAllcuenta = require('./application/getAllcuenta')
const updateCuenta = require('./application/updatecuenta')
const deleteById = require('./application/deletecuenta')
const anadirDinero = require('./application/anadirdinero')
const desembolsar = require('./application/desembolsardinero')
const transferir = require('./application/transferencia')
const porcadapersonaSaldo = require('./application/porcadapersonasaldo')
const totalDinero = require('./application/totaldinero') 


const CuentaRepository = new MongoCuentaRepository()

const newcuenta = async (req, res, next) => {
  try {
    const query = createCuenta({ CuentaRepository })
    const cuenta = await query(req.body)
    res.status(201).json({
      data: cuenta,
      message: 'Cuenta created'
    })
  } catch (e) {
    next(e)
  }
}

const getcuenta = async (_, res, next) => {
  try {
    const query = getAllcuenta({ CuentaRepository })
    const cuenta = await query()
    res.status(200).json({
      data: cuenta,
      message: 'Cuenta listed'
    })
  } catch (e) {
    next(e)
  }
}

const updatecuenta = async (req, res, next) => {
  try {
    const query = updateCuenta({ CuentaRepository })
    const cuenta = await query(req.body)
    res.status(201).json({
      data: cuenta,
      message: 'Cuenta updated'
    })
  } catch (e) {
    next(e)
  }
}

const deletecuenta = async (req, res, next) => {
  try {
    const query = deleteById({ CuentaRepository })
    const cuenta = await query(req.params)
    res.status(200).json({
      data: cuenta,
      message: 'Cuenta deleted'
    })
  } catch (e) {
    next(e)
  }
}

const anadirdinero = async (req, res, next) => {
  try {
    const query = anadirDinero({ CuentaRepository })
    const cuenta = await query(req.body)
    res.status(201).json({
      data: cuenta,
      message: 'Cuenta updated'
    })
  } catch (e) {
    next(e)
  }
}

const desembolsarDinero = async (req, res, next) => {
  try {
    const query = desembolsar({ CuentaRepository })
    const cuenta = await query(req.body)
    res.status(201).json({
      data: cuenta,
      message: 'Cuenta updated'
    })
  } catch (e) {
    next(e)
  }
}

const tranferencia = async (req, res, next) => {
  try {
    const query = transferir({ CuentaRepository })
    const cuenta = await query(req.body)
    res.status(201).json({
      data: cuenta,
      message: 'exitosa transferencia'
    })
  } catch (e) {
    next(e)
  }
}

const porcadapersonasaldo = async (req, res, next) => {
  try {
    const query = porcadapersonaSaldo({ CuentaRepository })
    const contact = await query(req.params)
    res.status(200).json({
      data: contact,
      message: 'Lista de cuentas'
    })
  } catch (e) {
    next(e)
  }
}

const dinerototal = async (req, res, next) => {
  try {
    const query = totalDinero({ CuentaRepository })
    const contact = await query(req.params)
    var dinerototal = contact.reduce(function(prev, cur) {
      return prev + cur.dinero;
    }, 0);

    res.status(200).json({
      data: dinerototal,
      message: 'Total de dinero'
    })
  } catch (e) {
    next(e)
  }
}

module.exports = {
  newcuenta,
  getcuenta,
  updatecuenta,
  deletecuenta,
  anadirdinero,
  desembolsarDinero,
  tranferencia,
  porcadapersonasaldo,
  dinerototal
}