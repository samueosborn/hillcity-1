import { Template } from 'meteor/templating';
import { Events } from '../../../api/lists/events.js';
import './events.html';

Template.events.helpers({
	posts() {
		return Events.find({}, { sort: { createdAt: -1 } });
	}
});

