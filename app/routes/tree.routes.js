module.exports = app => {
    const trees = require("../controllers/tree.controller.js");
    var router = require("express").Router();
    router.post("/", trees.create);
    router.get("/", trees.findAll);
    router.get("/:id", trees.findOne);
    router.put("/:id", trees.update);
    router.delete("/:id", trees.delete);
    app.use('/api/trees', router);
}