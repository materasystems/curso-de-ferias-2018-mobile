var express = require("express");
var router = express.Router();

var mockInfo = [
  {
    id: 1,
    descricao: "Angular",
    instrutores: [1, 2],
    dataInicio: new Date(),
    dataTermino: new Date(),
    segmento: "Front-end",
    urlLogo: null
  },
  {
    id: 2,
    descricao: "Ionic",
    instrutores: [3, 4],
    dataInicio: new Date(),
    dataTermino: new Date(),
    segmento: "Mobile",
    urlLogo: null
  },
  {
    id: 3,
    descricao: "Java",
    instrutores: [5, 6],
    dataInicio: new Date(),
    dataTermino: new Date(),
    segmento: "Backend",
    urlLogo: null
  }
];

router.get("/", function(req, res) {
  res.send(mockInfo);
});

router.get("/:id", function(req, res) {
  var result = mockInfo.find(item => item.id == req.params.id);
  if (result) {
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
    .checkBody("descricao", "Descrição obrigatório")
    .exists()
    .notEmpty();
  req
    .checkBody("instrutores", "Instrutores obrigatório")
    .exists()
    .notEmpty();
  req
    .checkBody("dataInicio", "Data início obrigatório")
    .exists()
    .notEmpty();
  req
    .checkBody("dataTermino", "Data término obrigatório")
    .exists()
    .notEmpty();
  req
    .checkBody(
      "segmento",
      "Perfil tem que ser entre ['Front-end', 'Mobile', 'Backend']"
    )
    .isIn(["Front-end", "Mobile", "Backend"]);
  var errors = req.validationErrors();
  if (errors.length > 0) {
    res.status(400).json(errors);
  } else {
    var id = mockInfo.length > 0 ? mockInfo[mockInfo.length - 1].id : 0;
    id++;
    var item = {
      id: id,
      descricao: req.body.descricao,
      instrutores: req.body.instrutores,
      dataInicio: req.body.dataInicio,
      dataTermino: req.body.dataTermino,
      segmento: req.body.segmento,
      urlLogo: req.body.urlLogo
    };
    mockInfo.push(item);
    res.status(200).json(item);
  }
});

router.put("/:id", function(req, res) {
  var index = mockInfo.findIndex(item => item.id == req.params.id);
  if (index > -1) {
    req
      .checkBody("descricao", "Descrição obrigatório")
      .exists()
      .notEmpty();
    req
      .checkBody("instrutores", "Instrutores obrigatório")
      .exists()
      .notEmpty();
    req
      .checkBody("dataInicio", "Data início obrigatório")
      .exists()
      .notEmpty();
    req
      .checkBody("dataTermino", "Data término obrigatório")
      .exists()
      .notEmpty();
    req
      .checkBody(
        "segmento",
        "Perfil tem que ser entre ['Front-end', 'Mobile', 'Backend']"
      )
      .isIn(["Front-end", "Mobile", "Backend"]);
    var errors = req.validationErrors();
    if (errors.length > 0) {
      res.status(400).json(errors);
    } else {
      var item = mockInfo[index];
      var newItem = {
        id: item.id,
        descricao: req.body.descricao,
        instrutores: req.body.instrutores,
        dataInicio: req.body.dataInicio,
        dataTermino: req.body.dataTermino,
        segmento: req.body.segmento,
        urlLogo: item.urlLogo
      };
      mockInfo[index] = newItem;
      res.status(200).json(newItem);
    }
    return;
  }
  res.status(400).json({ message: "Disciplina não localizada" });
});

module.exports = router;
