const { User } = require('../models');

class UserController {
  static Register(req, res) {
    const {email, username, password} = req.body;
    User.create({
      email, username, password
    })
    .then(result => {
      let response = {
        id: result.id,
        username: result.username,
        email: result.email
      }
      res.status(201).json(response)
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }
}

module.exports = UserController;