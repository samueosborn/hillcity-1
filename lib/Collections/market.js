Market = new Mongo.Collection('market'),
  MarketIndex = new EasySearch.Index({
    collection: Market,
    fields: ['post'],
    engine: new EasySearch.Minimongo()
  });

Meteor.methods({
	market: function(market) {
		market.timestamp = Date.now();
		market.user = Meteor.userId();
		Market.insert(market);
	}
});
