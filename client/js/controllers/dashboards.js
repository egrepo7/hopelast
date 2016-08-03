myApp.controller('dashboardsController', function(userFactory, photoFactory, $location){
  var self = this

  var checkSession = function(){
    if(userFactory.user.loggedIn){
      self.user = userFactory.user
    }else{
      $location.url('/')
    }
  }
  checkSession()

  photoFactory.photoIndex(function(data){
    console.log('loading photo index', data)
    self.photos = data
  })

  self.upVote = function(id, person){
    console.log(self.user)
    if(self.user.voted == 1){
      return
    }
    photoFactory.upVote(id, self.user.name, function(){
      console.log('sending 1 upvote', id, self.user.name)
      photoFactory.photoIndex(function(data){
        console.log('loading photo index', data)
        self.photos = data
      })
    })
  }
  self.downVote = function(id){
    console.log(id)
    photoFactory.downVote(id, function(){
      console.log('sending 1 downvote', id)
      photoFactory.photoIndex(function(data){
        console.log('loading photo index', data)
        self.photos = data
      })
    })
  }
  self.logout = function(){
    userFactory.logout
    $location.url('/')
  }
})
