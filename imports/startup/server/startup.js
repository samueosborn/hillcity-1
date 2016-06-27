Meteor.startup(function(){
	if (Meteor.users.find().count() === 0) {
		Accounts.createUser({
	      username: "sulley",
	      email: "sumohammed@hotmail.com",
	      password: "mosalis119988",
	      profile: {
	        section: "Admin",
	      }
	    })
	}
});