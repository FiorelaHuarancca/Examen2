require('dotenv').config()

const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 3001,
  mongo: {
    uri: process.env.MONGO_URI,
    db: process.env.MONGO_DB
  }
}

module.exports = { config }