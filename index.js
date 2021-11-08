const express = require('express');
const cors = require('cors');


const musicaRouter = require('./routes/musicas.routes');


const app = express();



app.use(express.json());


app.use(cors());


app.use('/musicas', musicaRouter);


const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})