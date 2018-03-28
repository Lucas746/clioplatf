'use strict'

const debug = require('debug')('clioplatf:api:db')

module.exports = {
  db: {
    database: process.env.DB_NAME || 'clioplatf',
    username: process.env.DB_USER || 'clio',
    password: process.env.DB_PASS || 'clio',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,
    logging: s => debug(s)
  },
  auth: {
    secret: process.env.SECRET || 'clio'
  }
}
