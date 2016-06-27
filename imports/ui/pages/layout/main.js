import { Template } from 'meteor/templating';

import './main.html';



Template.main.events({
	'submit form': function(e) {
		e.preventDefault();
		var reply = e.target.issue.value;

		Meteor.call('issue', {
			reply: issue
		})
	}
});
