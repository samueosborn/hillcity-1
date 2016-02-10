var ERRORS_KEY = 'joinErrors';

Template.join.onCreated(function() {
  Session.set(ERRORS_KEY, {});
});

Template.join.helpers({
  errorMessages: function() {
    return _.values(Session.get(ERRORS_KEY));
  },
  errorClass: function(key) {
    return Session.get(ERRORS_KEY)[key] && 'error';
  }
});

Template.join.events({
  'submit': function(event, template) {
    event.preventDefault();
    var username = template.$('[name=username]').val();
    var email = template.$('[name=email]').val();
    var department = template.$('[name=department]').val();
    var year = template.$('[name=year]').val();
    var password = template.$('[name=password]').val();
    var confirm = template.$('[name=confirm]').val();



    var errors = {};

    if(! username) {
      errors.email = 'Username required';
    }

    if (! email) {
      errors.email = 'Email required';
    }

    if (! password) {
      errors.password = 'Password required';
    }

    if (confirm !== password) {
      errors.confirm = 'Please confirm your password';
    }

    Session.set(ERRORS_KEY, errors);
    if (_.keys(errors).length) {
      return;
    }

    Accounts.createUser({
      username: username,
      email: email,
      password: password,
      profile: {
        department: department,
        year: year
      }
    }, function(error) {
      if (error) {
        return Session.set(ERRORS_KEY, {'none': error.reason});
      }

      var profile = Meteor.user().profile.department.replace(/\s/g, '');
        if (profile === 'AppliedScience') {
          return Router.go('/sciencebuzz');
        }else if(profile === 'Business') {
          return Router.go('/busibuzz');
        }else if(profile === 'Law') {
          return Router.go('/lawbuzz');
        }else if(profile === 'Arts&SocialSciences') {
          return Router.go('/artsmarket');
        }else if(profile === 'Theology&Missions') {
          return Router.go('/theobuzz');
        }

      Router.go('buzz');
    });
  } 


});
