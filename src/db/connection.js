const pathmodule = require('path')
require('dotenv').config({ path: pathmodule.resolve('.env') })
const oracledb = require('oracledb')
const process = require('process')

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT

let connection

const connect = async () => {
  try {
    connection = await oracledb.getConnection({
      user: process.env.ORACLE_USER,
      password: process.env.ORACLE_PASSWORD,
      connectString: process.env.ORACLE_CONNECT_STRING
    })

    console.log('Conexão com Banco de Dados estabelecida!')
    const result = await connection.execute(`SELECT first_name FROM EMPLOYEES WHERE employee_id = :id`, [100])
    console.log('QUERY TEST RESULT:', result.rows)
  } catch (err) {
    console.log('ERROR ON CONNECT:', err)
  }
}

const query = async (query, object) => {
  const result = await connection.execute(query, [])
  return result

}

const disconnect = async () => {
  try {
    await connection.close()
    console.log('conexão encerreda') 
  } catch (eerr) {
    console.log('errorreoreoro', eerr)
  }
}
// TODO Disconnect não funcionando ainda

module.exports = {
  connect,
  query,
  disconnect
}
