Template.civilfiles.events({
  "change .sciencefile": function(event, template){
     FS.Utility.eachFile(event,function(file) {
      var fileObj = new FS.File(file);
        fileObj.year = Meteor.user().profile.year;
       Civilfiles.insert(fileObj, function(err) {
         console.log(err);
       })
     })
  }
});

Template.civilfiles.helpers({
  file: function(){
    var year = Meteor.user().profile.year;
    return Civilfiles.find({"year": year}).fetch().reverse();
  }
});

Template.civilfiles.events({
  'click .reload': function () {
      setTimeout(function(){
        window.location.reload(1);
      }, 5000);
  }
});
