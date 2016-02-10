Template.marketupdate.events({
	'change .marketfile': function (event,template) {
		FS.Utility.eachFile(event,function(file) {
			var fileObj = new FS.File(file);
			Marketimages.insert(fileObj,function(err) {
				console.log(err);
			})
			return Picture = fileObj.original.name;
		})
	},
	'submit .item': function(event) {
		var marketpost = event.target.post.value;

		Meteor.call('market', {
			post: marketpost,
			pic: Picture
		});

		event.target.message.value = "";
		return false;
	}
});

Template.marketupdate.helpers({
	path: function() {
		var profile = Meteor.user().profile.department.replace(/\s/g, '');
        if (profile === 'AppliedScience') {
          return sciencemarket;
        }else if(profile === 'Business') {
          return businessmarket;
        }else if(profile === 'Law') {
          return lawmarket;
        }else if(profile === 'Arts&SocialSciences') {
          return artsmarket;
        }else if(profile === 'Theology&Missions') {
          return theomarket;
        }
	}
})