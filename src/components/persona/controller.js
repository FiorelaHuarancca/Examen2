const MongoPersonaRepository = require('./infraestructure/MongoPersonaRepository')
const createPersona = require('./application/createpersona')
const getAllPersona = require('./application/getAllPersona')
const updatePerson = require('./application/updatePersona')
const deleteById = require('./application/deletepersona')


const PersonaRepository = new MongoPersonaRepository()


const newPersona = async (req, res, next) => {
  try {
    const query = createPersona({ PersonaRepository })
    const persona = await query(req.body)
    res.status(201).json({
      data: persona,
      message: 'Persona created'
    })
  } catch (e) {
    next(e)
  }
}

const getPersona = async (_, res, next) => {
  try {
    const query = getAllPersona({ PersonaRepository })
    const persona = await query()
    res.status(200).json({
      data: persona,
      message: 'Persona listed'
    })
  } catch (e) {
    next(e)
  }
}

const updatePersona = async (req, res, next) => {
  try {
    const query = updatePerson({ PersonaRepository })
    const persona = await query(req.body)
    res.status(201).json({
      data: persona,
      message: 'Persona updated'
    })
  } catch (e) {
    next(e)
  }
}

const deletepersona = async (req, res, next) => {
  try {
    const query = deleteById({ PersonaRepository })
    const contact = await query(req.params)
    res.status(200).json({
      data: contact,
      message: 'Person deleted'
    })
  } catch (e) {
    next(e)
  }
}

module.exports = {
  newPersona,
  getPersona,
  updatePersona,
  deletepersona
}