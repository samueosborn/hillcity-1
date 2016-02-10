Template.buzz.helpers({
	card: function(){
		return Buzz.find();
	},
	image: function() {
		return Buzzimages.findOne({"original.name":this.pic});
	}
});

Template.buzz.events({
	"click .going": function(e) {
		var den = this._id;
		Meteor.call('upvote', den);
	}
});
