myApp.controller('photosController', function(userFactory, photoFactory, $location){
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

  self.addPhoto = function(){
    if(self.newPhoto.name.length < 4){
      self.picName = true
      return
    }
    if(self.newPhoto.tag.length < 3){
      self.picTag = true
      return
    }
    if(!self.newPhoto.url || self.newPhoto.url == 0){
      self.picURL = true
      return
    }
    self.newPhoto.user = self.user.name
    photoFactory.addPhoto(self.newPhoto, function(){
      console.log('sending new photo to database')
      photoFactory.photoIndex(function(data){
        console.log('loading photo index', data)
        self.photos = data
        self.picName = false
        self.picTag = false
        self.picURL = false
        $location.url('/dashpage')
      })
    })
  }
  self.logout = function(){
    userFactory.logout
    $location.url('/')
  }

})
