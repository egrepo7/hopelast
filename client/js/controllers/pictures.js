myApp.controller('picturesController', function(userFactory, photoFactory, $location, $routeParams){
  var self = this

  var checkSession = function(){
    if(userFactory.user.loggedIn){
      self.user = userFactory.user
    }else{
      $location.url('/')
    }
  }
  checkSession()

  // console.log($routeParams)
  photoFactory.showOne($routeParams.name, function(data){
    self.info = data
  })
  self.upVote = function(id){
    console.log(id)
    photoFactory.upVote(id, function(){
      console.log('sending 1 upvote', id)
      photoFactory.showOne($routeParams.name, function(data){
        self.info = data
      })
    })
  }
  self.downVote = function(id){
    console.log(id)
    photoFactory.downVote(id, function(){
      console.log('sending 1 downvote', id)
      photoFactory.showOne($routeParams.name, function(data){
        self.info = data
      })
    })
  }
  self.deletePic = function(id){
    photoFactory.delete(id, function(){
      photoFactory.showOne($routeParams.name, function(data){
        self.info = data
      })
    })
  }

  self.logout = function(){
    userFactory.logout
    $location.url('/')
  }
})
