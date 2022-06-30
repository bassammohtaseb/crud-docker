const db = require("../models");
const Tree = db.trees;
const Op = db.Sequelize.Op;
// Create and Save a new Tree
exports.create = (req, res) => {
  if (!req.body.treeName) {
    res.status(400).send({
        message: "Content can not be empty!"
    })
    return;
  }

  const tree = {
    treeName: req.body.treeName,
    description: req.body.description
  };
  Tree.create(tree).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
        message: err.message || "Error occurred while creating the Tree."
    });
  });
};
// Retrieve all Trees from the database.
exports.findAll = (req, res) => {
  Tree.findAll().then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
        message: err.message || "Error occurred while retrieving trees."
    });
  });
};
// Find a single Tree with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Tree.findByPk(id).then(data => {
    if(data) {
        res.send(data);
    } else {
        res.status(404).send({
            message: 'Cannot find Tree with id=${id}'
        });
    }
  }).catch(err => {
    res.status(500).send({
        message: "Error occurred while retrieving Tree with id = " + id
    });
  });
};
// Update a Tree by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Tree.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tree was updated successfully."
          });
        } else {
          res.send({
            message: 'Cannot update Tree with id=${id}. Maybe Tree was not found or req.body is empty!'
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error occurred while updating Tree with id = " + id
        });
      });
};
// Delete a Tree with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  Tree.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tree was deleted successfully!"
        });
      } else {
        res.send({
          message: 'Cannot delete Tree with id=${id}'
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tree with id=" + id
      });
    });
};