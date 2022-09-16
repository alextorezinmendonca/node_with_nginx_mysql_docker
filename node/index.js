const express = require('express')
const app = express()
const mysql = require('mysql')
const y = 1
const port = 3000
const config ={
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

app.get('/', (req, res) => {
    const returnArray = []
    const connection = mysql.createConnection(config)
    const sql = `INSERT INTO people(name) values('Alex')`
    connection.query(sql)
    
    connection.query('SELECT * from people', (err, pessoas) =>
    {

    for (x in pessoas){
       returnArray.push(' ' + pessoas[x].name)  
    }
    
    res.send(`</p>
                <p><h1>Full Cycle Rocks!</h1></p>
              <p> 

              </p>
              <p>- Lista de nomes cadastrada no banco de dados. </p>
                <li>Pessoas: ${returnArray}</li>
              <p> 
                
            `);


    });

    connection.end()

})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})