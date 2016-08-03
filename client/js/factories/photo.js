myApp.factory('photoFactory', function($http){
  var factory = {}

  factory.photoIndex = function(callback){
    console.log('@ photoFactory.photoIndex')
    $http.get('/photos').success(function(data){
      callback(data)
    })
  }
  factory.addPhoto = function(photo, callback){
    console.log('@ photoFactory.addPhoto', photo)
    $http.post('/addphoto', photo).success(function(photo){
      callback(photo)
    })
  }
  factory.upVote = function(id, username, callback){
    console.log('@ photoFactory.upVote', id, username)
    $http.post('/upVote/'+ id + '/' + username).success(function(){
      callback()
    })
  }
  factory.downVote = function(id, callback){
    console.log('@ photoFactory.downVote', id)
    $http.post('/downVote/'+ id).success(function(){
      callback()
    })
  }
  factory.showOne = function(name, callback){
    console.log('@ photoFactory.showOne', name)
    $http.get('/showuser/'+ name).success(function(data){
      callback(data)
    })
  }
  factory.delete = function(id, callback){
    console.log('@ photoFactory.showOne', id)
    $http.delete('/deletephoto/'+ id).success(function(){
      callback()
    })
  }
  return factory;
})
