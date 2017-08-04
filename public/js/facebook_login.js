class Facebook {

static init() {
window.fbAsyncInit = function() {
  window.FB.init({
    appId      : '1829955233984380',
    cookie     : true,
    xfbml      : true,
    version    : 'v2.8'
  });
  window.FB.AppEvents.logPageView();   
};


// sdk?
(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

// function will trigger a call to Facebook to get the 
// login status and call your callback function with the results
	FB.getLoginStatus(function(response) {
	    statusChangeCallback(response);
	});

}
}

// to solve FB not defined issue
// loadFB(facebookInit); // load FB scripts, then call facebookInit

// function facebookInit() {
//     buttonFB.disabled = false; // ready to connect with FB
//     buttonFB.onclick = function(){
//         // sometimes FB is still not available after facebookInit is called, it's safer to call it just in time
//         FB.init({ appId: 'your-app-id', cookie: true, xfbml: true, oauth: true });
//         // FB.api( or FB.login( ..
//     }
// }

// function loadFB(cb) { // loads FB script asynchronously
//     var script = document.createElement('script');
//     script.async = true;
//     script.src = '//connect.facebook.net/en_US/all.js';
//     script.onload = cb;
//     document.head.appendChild(script);
// }


// response object from FB
// // response object
// {
//     status: 'connected',
//     authResponse: {
//         accessToken: '...',
//         expiresIn:'...',
//         signedRequest:'...',
//         userID:'...'
//     }
// }














