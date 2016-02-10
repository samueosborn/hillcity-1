Template.market.helpers({
  item: function(){
    return Market.find();
  },
  image: function() {
		return Marketimages.findOne({"original.name":this.pic});
	}
});

Template.searchBox.helpers({
  marketIndex: () => MarketIndex
});


Template.searchBox.helpers({
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