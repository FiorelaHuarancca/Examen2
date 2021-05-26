const router = require('express').Router()
const {
    newcuenta,
    getcuenta,
    updatecuenta,
    deletecuenta,
    anadirdinero,
    desembolsarDinero,
    tranferencia,
    porcadapersonasaldo,
    dinerototal
} = require('../components/cuentas/controller')

router.get('/', (req, res) => {
    res.send('Hola la examen2-cuentas')
})

router.get(
    '/api/cuenta',
    getcuenta
)

router.post(
    '/api/cuenta',
    newcuenta
)

router.put(
    '/api/cuenta',
    updatecuenta
)

router.put(
    '/api/cuenta/anadir',
    anadirdinero
)

router.put(
    '/api/cuenta/desembolsar',
    desembolsarDinero
)

router.delete(
    '/api/cuenta/:id',
    deletecuenta
)

router.put(
    '/api/cuenta/transferir',
    tranferencia
)

router.get(
    '/api/cuenta/:id',
    porcadapersonasaldo
)

router.get(
    '/api/cuenta/dinerototal/:id',
    dinerototal
)


module.exports = router