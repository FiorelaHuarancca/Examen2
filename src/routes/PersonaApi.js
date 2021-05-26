const router = require('express').Router()

const {
  newPersona,
  getPersona,
  updatePersona,
  deletepersona
} = require('../components/persona/controller')

router.get('/', (req, res) => {
  res.send('Hola la examen2')
})

router.get(
    '/api/persona',
    getPersona
  )


router.put(
    '/api/persona',
    updatePersona
)

router.delete(
    '/api/persona/:id',
    deletepersona
  )

router.post(
  '/api/persona',
  newPersona
)

module.exports = router