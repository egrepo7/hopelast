var User = require('../controllers/users.js')
var Photo = require('../controllers/photos.js')

module.exports = function() {
  app.post('/login', User.login)
  app.post('/addphoto', Photo.add)
  app.post('/upVote/:id/:user', Photo.up)
  app.post('/downVote/:id', Photo.down)


  app.get('/photos', Photo.index)
  app.get('/showuser/:name', Photo.one)

  app.delete('/deletephoto/:id', Photo.delete)
}
