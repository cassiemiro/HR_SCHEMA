require('newrelic')
const express = require('express')
const app = express()
const { connect, query, disconnect } = require('./db/connection')
const process = require('process')

connect()

app.get("/departments", async (req, res) => {
  const result = await query(`SELECT * FROM departments`, [])
  console.log('GET departments')
  return res.json(result.rows)
})

app.get("/employees", async (req, res) => {
  const result = await query(`SELECT * FROM employees`, [])
  console.log('GET employees')
  return res.json(result.rows)
})

app.get("/jobs", async (req, res) => {
  const result = await query(`SELECT * FROM jobs`, [])
  console.log('GET jobs')
  return res.json(result.rows)
})

app.get("/countries", async (req, res) => {
  const result = await query(`SELECT * FROM countries`, [])
  console.log('GET countries')
  return res.json(result.rows)
})

app.get("/locations", async (req, res) => {
  const result = await query(`SELECT * FROM locations`, [])
  console.log('GET locations')
  return res.json(result.rows)
})

app.get("/regions", async (req, res) => {
  const result = await query(`SELECT * FROM regions`, [])
  console.log('GET regions')
  return res.json(result.rows)
})

app.get("/job_history", async (req, res) => {
  const result = await query(`SELECT * FROM job_history`, [])
  console.log('GET history')
  return res.json(result.rows)
})

process.on("SIGINIT", async function () {
  try {
    await connection.close()
    console.log("Conexão com banco de dados encerrada!")
  } catch (err) {
    console.log("Erro ao encerrar conexão com banco de dados")
    console.log(err)
  }

  if (i_should_exit) {
    process.exit()
  }
})

const { APP_PORT } = process.env

app.listen(process.env.APP_PORT, () => {
  console.log(`SERVER ON PORT ${APP_PORT}`)
})
