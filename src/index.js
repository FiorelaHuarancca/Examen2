const express = require('express');
const app = express();

const { config } = require('./config')
const PersonaApi = require('./routes/PersonaApi')
const CuentaApi = require('./routes/CuentaApi')



app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', PersonaApi)
app.use('/', CuentaApi)

app.listen(config.port, () => {
  console.log(`listening http://localhost:${config.port}`)
})



