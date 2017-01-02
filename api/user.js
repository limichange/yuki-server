const bcrypt = require('bcryptjs')
const secret = 'blog.limichange.com'
const dbModels = require('../db/models')
const uuidV4 = require('uuid/v4')

module.exports = {
  signIn (req, res, next) {
    const { password, username } = req.body

    dbModels.Users.findOne({
      where: {
        username
      }
    })
    .then((user) => {
      if (bcrypt.compareSync(password, user.password)) {
        const token = uuidV4()

        dbModels.Accesstokens.create({
          token,
          user_id: user.id,
          expires: (Date.now() + 1000 * 60 * 60 * 60)
        })

        res.json({
          token,
          msg: 'ok'
        })
      } else {
        res.json({
          msg: 'no'
        })
      }
    })
  },

  signUp (req, res, next) {
    const { password, username, email } = req.body
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)

    dbModels.Users.create({
      password: hash,
      username,
      email,
      nickname: email,
      salt,
      uuid: uuidV4()
    }).then(() => {
      res.json({
        username,
        msg: 'ok'
      })
    })
  }
}
