myApp.controller('usersController', function(userFactory, $location){
  var self = this

  var checkSession = function(){
    if(userFactory.user.loggedIn){
      self.user = userFactory.user
    }else{
      $location.url('/')
    }
  }
  checkSession()

  self.logReg = function(){
    console.log(userFactory)
    userFactory.logReg(self.newUser, function(retrInfo){
      if(retrInfo.errors){
        self.errors = errors
      }else{
        // usersFactory.user = retrInfo.user
        // usersFactory.user.loggedIn = true
        self.user = retrInfo.user
        console.log(self.user)
        $location.url('/dashpage')
      }
      self.newUser = {}
    })
  }
  self.logout = function(){
    userFactory.logout
    $location.url('/')
  }
})
