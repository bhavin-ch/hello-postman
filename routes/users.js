var express = require('express');
var router = express.Router();

const users = [
  {
    id: 0,
    name: "Lennart Johansson",
    city: "Stockholm"
  },
  {
    id: 1,
    name: "Karl Eriksson",
    city: "London"
  },
  {
    id: 2,
    name: "Pekka Hartikainen",
    city: "Helsinki"
  },
  {
    id: 3,
    name: "Mia Svensson",
    city: "Berlin"
  }
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(users);
});

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  const user = users.find(u => Number(u.id) === Number(id));
  if (!user) return res.status(404).send(`No user found with id ${id}`);
  res.send(user);
});

/* POST new user. */
router.post('/', function(req, res, next) {
  const { name, city } = req.body;
  const id = users.length;
  users.push({ id, name, city });
  res.send({ id });
});

/* DELETE a user. */
router.delete('/:id', function(req, res, next) {
  const id = req.params.id;
  const index = users.findIndex(u => Number(u.id) === Number(id));
  if (index === -1) return res.status(404).send(`No user found with id ${id}`);
  users.splice(index, 1);
  res.send({ id });
});

module.exports = router;
