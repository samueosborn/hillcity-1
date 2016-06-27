import { Template } from 'meteor/templating';
import { News } from '../../../api/lists/news.js';
import './news.html';

Template.news.helpers({
	posts() {
		return News.find({}, { sort: { createdAt: -1 } });
	}
});

