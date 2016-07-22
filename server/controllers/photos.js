var Photo = mongoose.model('Photo')
var User = mongoose.model('User')

module.exports = (function(){
  return{
    index: function(req, res){
      Photo.find({}, function(err, data){
        if(err){
          res.json(err)
        }else{
          res.json(data)
        }
      })
    },
    add: function(req, res){
      console.log(req.body)
      var newPhoto = new Photo(req.body)
      newPhoto.save(function(err){
        if(err) res.json(err)
        else res.json({'status': true})
      })
    },
    up: function(req, res){
      console.log(req.params)
      Photo.findOne({_id: req.params.id}, function(err, photo){
        if(err){
          res.json(err)
        }else{
          photo.upvotes++
          if(photo.downvotes > 0){
            photo.downvotes--
          }
          photo.save(function(err){
            console.log(photo)
            if(err){
              res.json(err)
            }else{
              User.findOne({_id: req.params.user}, function(err, person){
                if(err){
                  res.json(err)
                }else{
                  console.log(person)
                  person.voted = 1
                  person.save(function(err){
                    if(err) res.json(err)
                    else res.json({'status': true})
                  })
                }
              })
            }
          })
        }
      })
    },
    down: function(req, res){
      console.log(req.params.id)
      Photo.findOne({_id: req.params.id}, function(err, photo){
        if(err){
          res.json(err)
        }else{
          photo.downvotes++
          if(photo.upvotes > 0){
            photo.upvotes--
          }
          photo.save(function(err){
            console.log(photo)
            if(err) res.json(err)
            else res.json({'status': true})
          })
        }
      })
    },
    one: function(req, res){
      console.log(req.params)
      Photo.find({user: req.params.name}, function(err, info){
        console.log(info)
        if(err) res.json
        else res.json(info)
      })
    },
    delete: function(req, res){
      console.log(req.params)
      Photo.remove({_id: req.params.id }, function(err){
        if(err) res.json(err)
        else res.json({'status': true})
      })
    }
  }
})()
