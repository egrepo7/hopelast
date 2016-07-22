var User = mongoose.model('User')

module.exports = (function(){
  return{
    login: function(req, res){
      User.findOne( {name: req.body.name}, function(err, user){
        console.log(user);
        if(err) res.json({'status': false, 'errors': 'ERROR!'})
        else if (!user){
          console.log('need to create a new user!')
          var newUser = new User(req.body);
          newUser.save(function(err){
            if(err) res.json({'status': false, 'errors': err})
            else res.json ({'status': true, 'user': {name: newUser.name, id: newUser._id, loggedIn: true }})
          })
        }else{
          res.json({'status': true, 'user': {name: user.name, id: user._id, loggedIn: true }})
        }
      })
    },
    index: function(req, res){
      User.find({}).populate('_list').exec(function(err, data){
        if(err){
          res.json(err)
        }else{
          res.json(data)
        }
      })
    },
  }
})()
