import './eventsupdate.html';

Template.eventsupdate.events({
	'submit form'(event) {
		//Prevents default action
		event.preventDefault();
		const image = event.target.image.files[0];
		const text = event.target.text.value;
		const reader = new FileReader();

		reader.onload = function(event) {
			const src = reader.result
			Meteor.call('event.insert', text, src)
		}
		reader.readAsDataURL(image);		
	}
});