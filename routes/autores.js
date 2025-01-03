var express = require('express');
let db = require('../utils/db');
var router = express.Router();

router.get('/listar', function(req, res) {
  let cmd = ' SELECT IdAutor, NoAutor, NoNacionalidade';
      cmd += ' FROM TbAutor AS a INNER JOIN TbNacionalidade AS n';
      cmd += ' ON a.IdNacionalidade = n.IdNacionalidade';
      cmd += ' ORDER BY NoNacionalidade';

  db.query(cmd, [], function(erro, listagem){
    if (erro){router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cafeteria' });
});
      res.send(erro);
    }
    res.render('autores-lista', {resultado: listagem});
  });
});

router.post('/add', function(req, res) {
  let nome = req.body.nome;
  let nacionalidade = req.body.nacionalidade;
  let cmd = ' INSERT INTO TbAutor (NoAutor, IdNacionalidade) VALUES (?, ?);';
  db.query(cmd, [nome, nacionalidade], function(erro, listagem){
    if (erro){router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cafeteria' });
});
      res.send(erro);
    }
    res.redirect('/autores/listar');
  });
});

router.get('/add', function(req, res) {
    res.render('autores-add');
  }); 

module.exports = router;
