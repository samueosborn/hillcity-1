//BUSINESS

Meteor.publish('agribusinessfiles', function() {
	return Agribusinessfiles.find({}, {sort: {createdAt: -1}});
});

Meteor.publish('bankingfiles', function() {
	return Bankingfiles.find({}, {sort: {createdAt: -1}});
});

Meteor.publish('marketingfiles', function() {
	return Marketingfiles.find({}, {sort: {createdAt: -1}});
});

Meteor.publish('hrmgtfiles', function() {
	return Hrmgtfiles.find({}, {sort: {createdAt: -1}});
});

Meteor.publish('mgtstudiesfiles', function() {
	return Mgtstudiesfiles15.find({}, {sort: {createdAt: -1}});
});


//BUZZ & MARKET


Meteor.publish('buzz', function() {
	return Buzz.find({}, {sort: {createdAt: -1}});
});

Meteor.publish('market', function() {
	return Market.find({}, {sort: {createdAt: -1}});
});

Meteor.publish('marketimages', function() {
	return Marketimages.find({});
});

Meteor.publish('buzzimages', function() {
	return Buzzimages.find({});
});


//ARTS


Meteor.publish('communicationfiles', function() {
	return Communicationfiles.find({}, {sort: {createdAt: -1}});
});

Meteor.publish('economicsfiles', function() {
	return Economicsfiles.find({}, {sort: {createdAt: -1}});
});

Meteor.publish('englishfiles', function() {
	return Englishfiles.find({}, {sort: {createdAt: -1}});
});

Meteor.publish('environmentfiles', function() {
	return Environmentfiles.find({}, {sort: {createdAt: -1}});
});

Meteor.publish('Frenchfiles', function() {
	return Frenchfiles.find({}, {sort: {createdAt: -1}});
});


//APPLIED SCIENCE


Meteor.publish('architecturefiles', function() {
	return Architecturefiles.find({}, {sort: {createdAt: -1}});
});

Meteor.publish('civilfiles', function() {
	return Civilfiles.find({}, {sort: {createdAt: -1}});
});

Meteor.publish('nursingfiles', function() {
	return Nursingfiles.find({}, {sort: {createdAt: -1}});
});

Meteor.publish('pharmacyfiles', function() {
	return Pharmacyfiles.find({}, {sort: {createdAt: -1}});
});

Meteor.publish('physicianfiles', function() {
	return Physicianfiles.find({}, {sort: {createdAt: -1}});
});


//THEOLOGY


Meteor.publish('biblicalfiles', function() {
	return Biblicalfiles.find({}, {sort: {createdAt: -1}});
});

Meteor.publish('christianfiles', function() {
	return Christianfiles.find({}, {sort: {createdAt: -1}});
});

Meteor.publish('churchfiles', function() {
	return Churchfiles.find({}, {sort: {createdAt: -1}});
});

Meteor.publish('theologyfiles', function() {
	return Theologyfiles.find({}, {sort: {createdAt: -1}});
});


//LAW


Meteor.publish('lawfiles', function() {
	return Lawfiles.find({}, {sort: {createdAt: -1}});
});