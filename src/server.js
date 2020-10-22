const express = require('express')
const app = express()
const { connect, query, disconnect } = require('./db/connection')
const process = require('process')

connect()

app.get("/departments", async (req, res) => {
  const result = await query(`SELECT * FROM departments`, []);
  return res.json(result.rows);
});

app.get("/employees", async (req, res) => {
  const result = await query(`SELECT * FROM employees`, []);
  return res.json(result.rows);
});

app.get("/jobs", async (req, res) => {
  const result = await query(`SELECT * FROM jobs`, []);
  return res.json(result.rows);
});

app.get("/countries", async (req, res) => {
  const result = await query(`SELECT * FROM countries`, []);
  return res.json(result.rows);
});

app.get("/locations", async (req, res) => {
  const result = await query(`SELECT * FROM locations`, []);
  return res.json(result.rows);
});

app.get("/regions", async (req, res) => {
  const result = await query(`SELECT * FROM regions`, []);
  return res.json(result.rows);
});

app.get("/job_history", async (req, res) => {
  const result = await query(`SELECT * FROM job_history`, []);
  return res.json(result.rows);
});

process.on("SIGINIT", async function () {
  try {
    await connection.close();
    console.log("Conexão com banco de dados encerrada!");
  } catch (err) {
    console.log("Erro ao encerrar conexão com banco de dados");
    console.log(err);
  }

  if (i_should_exit) {
    process.exit();
  }
});


app.listen(process.env.PORT)
