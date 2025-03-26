const express = require('express')
const logsRouter = require('./router/LogsRouter');


const app= express();

app.use(express.json())

var port = 5000;

app.use('/logs',logsRouter)

app.get('/logs', (req, res) => {  
    res.json(logs);  
  });  
  
  // Endpoint para guardar logs  
  app.post('/logs', (req, res) => {  
    const logEntry = req.body;  
    logs.push(logEntry);  
    res.status(201).send(logEntry);  
  });  
  
app.listen(port,()=>{
    console.log('Ejecutando en puerto', port)
})

