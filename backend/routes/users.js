const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const departement = req.body.departement;

  const newUser = new User({departement});

  newUser.save()
    .then(() => res.json('Departement added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;