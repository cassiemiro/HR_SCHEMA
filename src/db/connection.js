const pathmodule = require('path')
require('dotenv').config({ path: pathmodule.resolve('.env') })
const { Client } = require('pg')

const client = new Client({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT
})

const connect = async () => {
  try {
    await client.connect()
  }
  catch (error) {
    console.log('error on connect ->', error)
  }
}

const runQuery = async (query) => {
  try {
    await client.query(query)
  }
  catch (error) {
    console.log('error on query ->', error)
  }
}

const disconnect = async () => {
  try {
    await client.end()
  }
  catch (error) {
    console.log('error on disconnect ->', error)

  }
}

module.exports = {
  connect,
  runQuery,
  disconnect
}