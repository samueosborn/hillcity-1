import { Meteor } from 'meteor/meteor';
import { News } from './news.js';
import { Events } from './events.js';

Meteor.methods({
	'news.insert' (news, src) {

		News.insert({
			news,
			src,
			createdAt: new Date(),
			user: Meteor.userId(),
		})
		
	},
	'event.insert' (text, src) {

		Events.insert({
			text,
			src,
			createdAt: new Date(),
			user: Meteor.userId(),
		})
		
	}
});

