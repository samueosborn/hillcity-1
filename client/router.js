import { News } from '../imports/api/lists/news.js';

Router.route('/', function () {
  this.render('welcome');
  this.layout('logslayout');

  if (Meteor.userId()) {
    this.redirect('/news')
  }
});

Router.route('/join', function () {
  this.render('join');
  this.layout('layout');

  if (Meteor.userId()) {
    this.redirect('/news')
  }
});

Router.route('/news', function () {
  this.layout('main');
  this.render('news');
});

Router.route('/events', function () {
  this.layout('main');
  this.render('events');
});

Router.route('/newsupdate', function () {
  this.layout('main');
  this.render('newsupdate');
});

Router.route('/eventsupdate', function () {
  this.layout('main');
  this.render('eventsupdate');
});


Router.route('/news/:_id',{
  name: 'newspage',
  layoutTemplate: 'layout',
  data: function () {
    return News.findOne(this.params._id);
  }
});


