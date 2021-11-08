const express = require('express');

const router = express.Router();

const musicas = [
    {
        id: 1,
        titulo: 'Ciumeira',
        genero: 'Sertanejo',
        logo: 'data:image/jpeg;base64,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',
        cantor: 'Marilia Mendonça',
        ano: '2018',
        descricao: 'Rainha da Sofrencia',
        nota: '10'
    },
]


router.get('/', (req, res) => {
    res.send(musicas);
})


router.get('/:id', (req, res) => {
    const idParam = req.params.id;
    const musica = musicas.find(musica => musica.id == idParam);

    
    if(!musica) {
        res.status(404).send({error: 'Musica nao encontrada'});
        return;
    }

    res.send(musica);
})


router.post('/add', (req, res) => {

    const musica = req.body;

    if(!musica || !musica.titulo || !musica.genero || !musica.logo || !musica.cantor || !musica.ano || !musica.descricao || !musica.nota) {
        res.status(400).send({
            message: 'vaga invÃ¡lida, esta faltando os campos titulo e salario'
        })
        return;
    }
    
    musica.id = musicas[musicas.length -1].id + 1;
    musicas.push(musica);
    res.status(201).send({
        message: `Musica ${musica.titulo} Foi Cadastrado com Sucesso!!`,
        data: musicas
    });
})


router.put('/edit/:id', (req, res) => {
    
    const musicaEdit = req.body;
    
    const idParam = req.params.id;
    
    let index = musicas.findIndex(musica => musica.id == idParam);

    if(index < 0) {
        res.status(404).send({
            error: 'a musica que voce está tentando editar nao foi encontrada'
        })
        return;
    }

    
    musicas[index] = {
        ...musicas[index],
        ...musicaEdit
    }

    res.send({
        message: `musica ${musicas[index].titulo} atualizada com sucesso`,
        data: musicas[index]
    })
})



router.delete('/delete/:id', (req, res) => {
    
    const idParam = req.params.id;

    const index = musicas.findIndex(musica => musica.id == idParam);
    const nome = musicas[index];
    
    musicas.splice(index, 1);
    res.send({
        message: `Musica ${nome.titulo} excluida com sucesso !`,
    })
})


module.exports = router;