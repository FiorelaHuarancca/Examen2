const MongoLib = require('../../../lib/mongo')

class MongoPersonaRepository { 
  constructor () {
    // super()
    this.collection = 'persona'
    this.mongoDB = new MongoLib()
  }

  async add (persona) {
    const _id = await this.mongoDB.create(this.collection, persona)
    return { _id, ...persona }
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
}

module.exports = MongoPersonaRepository
