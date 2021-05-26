const MongoLib = require('../../../lib/mongo')

class MongoCuentaRepository { 
  constructor () {
    // super()
    this.collection = 'cuenta'
    this.mongoDB = new MongoLib()
  }

  async add (cuenta) {
    const _id = await this.mongoDB.create(this.collection, cuenta)
    return { _id, ...cuenta }
  }

  async getAll () {
    return this.mongoDB.getAll(this.collection)
  }

  async update (id, user) {
    return this.mongoDB.update(this.collection, id, user)
  }

  async delete (id) {
    return this.mongoDB.delete(this.collection, id)
  }

  async getById (id) {
    //  return await this.mongoDB.get(this.collection, null, { id })
    return await this.mongoDB.get(this.collection, id, null)
  }

  async getDocumentInfo () {
    return await this.mongoDB.getInfo(this.collection)
  }

  async porcadapersonasaldo (persona) {
    return await this.mongoDB.porcadapersonasaldo(this.collection, persona)
  }

}

module.exports = MongoCuentaRepository
