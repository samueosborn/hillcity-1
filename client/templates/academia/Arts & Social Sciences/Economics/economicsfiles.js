Template.economicsfiles.events({
  "change .artsfile": function(event, template){
     FS.Utility.eachFile(event,function(file) {
       var fileObj = new FS.File(file);
       fileObj.year = Meteor.user().profile.year;
       Economicsfiles.insert(fileObj, function(err) {
         console.log(err);
       })
     })
  }
});

Template.economicsfiles.helpers({
  file: function() {
    var year = Meteor.user().profile.year;
    return Economicsfiles.find({"year": year}).fetch().reverse();
  }
});

Template.economicsfiles.events({
  'click .reload': function () {
      setTimeout(function(){
        window.location.reload(1);
      }, 1000);
  }
});
