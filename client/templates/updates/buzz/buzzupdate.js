Template.buzzupdate.events({
	'change .buzzfile': function (event,template) {
		FS.Utility.eachFile(event,function(file) {
			var fileObj = new FS.File(file);
			Buzzimages.insert(fileObj,function(err) {
				console.log(err);
			})
			return Picture = fileObj.original.name;
		})
	},
	'submit .buzz': function(event) {
		var body = event.target.newbuzz.value;

		Meteor.call('buzz', {
			info: body,
			pic: Picture,
		  	upvoters:[],
			votes: 0
		});

		event.target.message.value = "";
		return false;
	}
});

Template.buzzupdate.helpers({
	path: function() {
		var profile = Meteor.user().profile.department.replace(/\s/g, '');
        if (profile === 'AppliedScience') {
          return sciencebuzz;
        }else if(profile === 'Business') {
          return businessbuzz;
        }else if(profile === 'Law') {
          return lawbuzz;
        }else if(profile === 'Arts&SocialSciences') {
          return artsbuzz;
        }else if(profile === 'Theology&Missions') {
          return theobuzz;
        }
	}
})
