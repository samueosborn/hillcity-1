Buzz = new Mongo.Collection('buzz');
Meteor.methods({
	buzz: function(buzz) {
		buzz.timestamp = Date.now();
		buzz.user = Meteor.userId();
		Buzz.insert(buzz);
	},
	upvote: function(den) {
		Buzz.update({
			_id: den,
			upvoters: {$ne: this.userId}
		}, {
			$addToSet: {upvoters: this.userId},
			$inc: {votes: 1}
		});
	}
});
