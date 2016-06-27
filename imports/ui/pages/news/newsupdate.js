import './newsupdate.html';

Template.newsupdate.events({
	'submit form'(event) {
		//Prevents default action
		event.preventDefault();
		const image = event.target.image.files[0];
		const news = event.target.news.value;
		const reader = new FileReader();

		reader.onload = function(event) {
			const src = reader.result
			Meteor.call('news.insert', news, src)
		}
		reader.readAsDataURL(image);		
	}
});

