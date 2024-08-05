const { logEvents } = require('./logger');

//função vai sobrescrever o tratamento de erro padrão do express
const errorHandler = (err, res,req,next)=>{}