var express = require("express");
var router = express.Router();

var mockInfo = [
  {
    id: 1,
    nome: "José da Silva",
    login: "jose",
    email: "jose@ponto.com.br",
    perfil: "ALUNO",
    urlFoto: null,
    senha: 123456
  },
  {
    id: 2,
    nome: "Mariano das Neves",
    login: "mariano",
    email: "marino@ponto.com.br",
    perfil: "ALUNO",
    urlFoto: null,
    senha: 123456
  },
  {
    id: 3,
    nome: "Magyver da Silva",
    login: "magyver",
    email: "magyver@ponto.com.br",
    perfil: "ALUNO",
    urlFoto: null,
    senha: 123456
  },
  {
    id: 4,
    nome: "Irineu Nunes",
    login: "irineu",
    email: "irineu@ponto.com.br",
    perfil: "ALUNO",
    urlFoto: null,
    senha: 123456
  },
  {
    id: 5,
    nome: "Carlos Silva",
    login: "carlos",
    email: "carlos@ponto.com.br",
    perfil: "ALUNO",
    urlFoto: null,
    senha: 123456
  },
  {
    id: 6,
    nome: "Carlos Silva",
    login: "carlos",
    email: "carlos@ponto.com.br",
    perfil: "ALUNO",
    urlFoto: null,
    senha: 123456
  },
  {
    id: 7,
    nome: "Carlos Silva",
    login: "carlos",
    email: "carlos@ponto.com.br",
    perfil: "ALUNO",
    urlFoto: null,
    senha: 123456
  }
];

router.get("/", function(req, res) {
  var result = JSON.parse(JSON.stringify(mockInfo));
  result.forEach(item => {
    delete item.senha;
  });
  res.send(result);
});

router.get("/:id", function(req, res) {
  var result = mockInfo.find(item => item.id == req.params.id);
  if (result) {
    result = JSON.parse(JSON.stringify(result));
    delete result.senha;
    res.send(result);
    return;
  }
  res.status(204);
});

router.delete("/:id", function(req, res) {
  var index = mockInfo.findIndex(item => item.id == req.params.id);
  if (index > -1) {
    mockInfo.splice(index, 1);
    res.send(200);
    return;
  }
  res.status(204);
});

router.post("/", function(req, res) {
  req
    .checkBody("nome", "Nome obrigatório")
    .exists()
    .notEmpty();
  req
    .checkBody("login", "Login obrigatório")
    .exists()
    .notEmpty();

  req
    .checkBody("email", "E-mail obrigatório")
    .exists()
    .notEmpty();
  req
    .checkBody("perfil", "Perfil obrigatório")
    .exists()
    .notEmpty();
  req
    .checkBody("senha", "Perfil obrigatório")
    .exists()
    .notEmpty();
  req
    .checkBody(
      "perfil",
      "Perfil tem que ser entre ['ALUNO', 'ADMINISTRADOR', 'PROFESSOR']"
    )
    .isIn(["ALUNO", "ADMINISTRADOR", "PROFESSOR"]);
  var errors = req.validationErrors();
  if (errors.length > 0) {
    res.status(400).json(errors);
  } else {
    var id = mockInfo.length > 0 ? mockInfo[mockInfo.length - 1].id : 0;
    id++;
    var item = {
      id: id,
      nome: req.body.nome,
      login: req.body.login,
      email: req.body.email,
      perfil: req.body.perfil,
      senha: req.body.senha
    };
    mockInfo.push(item);
    item = JSON.parse(JSON.stringify(item));
    delete item.senha;
    res.status(200).json(item);
  }
});

router.put("/:id", function(req, res) {
  var index = mockInfo.findIndex(item => item.id == req.params.id);
  if (index > -1) {
    req
      .checkBody("nome", "Nome obrigatório")
      .exists()
      .notEmpty();
    req
      .checkBody("login", "Login obrigatório")
      .exists()
      .notEmpty();
    req
      .checkBody("email", "E-mail obrigatório")
      .exists()
      .notEmpty();
    req
      .checkBody("perfil", "Perfil obrigatório")
      .exists()
      .notEmpty();
    req
      .checkBody(
        "perfil",
        "Perfil tem que ser entre ['ALUNO', 'ADMINISTRADOR', 'PROFESSOR']"
      )
      .isIn(["ALUNO", "ADMINISTRADOR", "PROFESSOR"]);
    var errors = req.validationErrors();
    if (errors.length > 0) {
      res.status(400).json(errors);
    } else {
      var item = mockInfo[index];
      var newItem = {
        id: item.id,
        nome: req.body.nome,
        login: req.body.login,
        email: req.body.email,
        perfil: req.body.perfil,
        senha: req.body.senha ? req.body.senha : item.senha
      };
      mockInfo[index] = newItem;
      newItem = JSON.parse(JSON.stringify(newItem));
      delete newItem.senha;
      res.status(200).json(newItem);
    }
    return;
  }
  res.status(400).json({ message: "User não localizado" });
});

module.exports = router;
