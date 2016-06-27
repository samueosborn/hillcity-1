Meteor.startup(function() {
	$(document).on('deviceready', function() {
	  return $(document).on('click', function(e) {
	    var $link, url;
	    $link = $(e.target).closest('a[href]');
	    if (!($link.length > 0)) {
	      return;
	    }
	    url = $link.attr('href');
	    if (!Paths.isUrl(url)) {
	      return;
	    }
	    switch (platform) {
	      case 'ios':
	        window.open(url, '_system');
	        break;
	      case 'android':
	        navigator.app.loadUrl(url, {
	          openExternal: true
	        });
	    }
	    return e.preventDefault();
	  });
	});
	Tracker.autorun(function () {
    var token = sessionStorage.getItem('_storedLoginToken');

	    if(token){
	        Meteor.loginWithToken(token, function(err){
	            // this is going to throw error if we logged out
	            if(!err) {console.log('loginWithToken ',token)}
	            else{console.log('loginWithTokenError ',err)};
	        });
	    }
	});
//
// autorun.user
//if user is logged in we put token to **sessionStorage**
	Tracker.autorun(function(){
	    var user = Meteor.user();
	    //sometimes user can be null
	    if (user === null){
	        user = undefined;
	    }
	    if(user)
	    {
	        console.log('set token');
	        sessionStorage.setItem('_storedLoginToken', Accounts._storedLoginToken());
	    }
	});

	Tracker.autorun(function() {
		if (Meteor.userId() === null) {
	       Router.go('/');
		}
	});
});