window.fbAsyncInit = function() {
  FB.init({
    appId      : '1829955233984380',
    cookie     : true,
    xfbml      : true,
    version    : 'v2.8'
  });
 
  // has to be inside or FB will be undefined
  // will work if it is commented out
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

};


  function statusChangeCallback(response){
    if(response.status === 'connected'){
      console.log('Logged in and authenticated');
      // front end knows that the client is logged in
      // check to see if already in system
      // otherwise I need to create into db
      getUserInformationAPI();
    } else {
       console.log('Not authenticated');
    }
   };


  function checkLoginState() {
      FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
      });
  }

  // get user information
  function getUserInformationAPI() {
    FB.api('/me?fields=name,email,first_name', function(response){
      if(response && !response.error){
        console.log("blah")
        console.log(response);
        // do an ajax

        $.ajax({
          url: '/users/login',
          method: 'post',
          data: response
        })
        .done(function(response){
          console.log("done in API")
          document.location.href="/users/profile"
          // redirectToProfile(response)
          // send information to controller
        })
        .fail(function(){
          console.log("fail in API")
        })
        .always(function(){
          console.log("moo in API")
        })
        
      }
    })
  }

  // check to see if client is present in system
  // post login
  function redirectToProfile(response) {
    console.log("inside redirectToProfile")
    console.log(response)
    $.ajax({
      url: '/profile',
      method: 'get',
      data: response
      // set session
    })
    .done(function(response){
      // get html back 
      console.log("done");
      console.log("line 60");
      console.log(response)
      // document.location.href="/users/profile"
       // set session
    })
    .fail(function(){
      console.log("fail")
    })
    .always(function(){
      console.log("moo")
    })
  };



 // SDK
  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
































  // function checkLoginState() {
  //   FB.getLoginStatus(function(response) {
  //     statusChangeCallback(response);
  //   }
  //   );
  // }




  // may not be necessary since I am trying to redirect to profile page
  // show and hide things based on logged in state
  // function setElements(isLoggedIn) {
  //   if (isLoggedIn) {
  //     $(document.getElementById('fb-profile')).removeClass('hidden');
  //     $(document.getElementById('fb-heading')).addClass('hidden');
  //   } else {
  //     $(document.getElementById('fb-profile')).addClass('hidden');
  //     $(document.getElementById('fb-heading')).removeClass('hidden');
  //   }
  // }

 








