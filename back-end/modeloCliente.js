const Pool = require('pg').Pool
const pool = new Pool({
  user: 'yprvbpsgfyfsls',
  host: 'ec2-23-23-36-227.compute-1.amazonaws.com',
  database: 'd3ok37s7f56j5j',
  password: 'cec675defcad44045415d6932ebc88d04d86080a3e3a4aa348be125256de3bcf',
  port: 5432,
});


const getCliente = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM clientes', (error, results) => {
      if (error) {
        reject(error)
      }
      if(results != null){
        resolve(results.rows);
      }

    })
  })
}
const createCliente = (body) => {
  return new Promise(function(resolve, reject) {
    const { telefono, nombre } = body
    pool.query('INSERT INTO clientes (telefono, nombre) VALUES ($1, $2) RETURNING *', [telefono, nombre], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`A new merchant has been added added: ${results.rows[0]}`)
    })
  })
}
const deleteCliente = () => {
  return new Promise(function(resolve, reject) {
    const telefono = request.params.telefono
    pool.query('DELETE FROM clientes WHERE telefono = $1', [telefono], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`Merchant deleted with ID: ${telefono}`)
    })
  })
}

module.exports = {
  getCliente,
  createCliente,
  deleteCliente,
}
