myApp.factory('userFactory', function($http){
  var factory = {}

  factory.user = {}

  factory.logReg = function(userData, callback){
    $http.post('/login', userData).success(function(dbInfo){
      factory.user.loggedIn = true
      factory.user = dbInfo.user
      callback(dbInfo)
    })
  }

  // factory.index = function(callback){
  //   console.log('hitting userFactory.index')
  //   $http.get('/users').success(function(data){
  //     callback(data)
  //   })
  // }
  // factory.showOne = function(id, callback){
  //   $http.get('/getoneuser/' + id).success(function(data){
  //     callback(data)
  //   })
  // }

  factory.logout = function(callback){
    factory.user = {}
  }
  return factory;
})
