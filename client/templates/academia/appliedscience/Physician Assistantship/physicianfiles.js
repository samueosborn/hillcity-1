Template.physicianfiles.events({
  "change .sciencefile": function(event, template){
     FS.Utility.eachFile(event,function(file) {
      var fileObj = new FS.File(file);
       fileObj.year = Meteor.user().profile.year;
       Physicianfiles.insert(fileObj, function(err) {
         console.log(err);
       })
     })
  }
});

Template.physicianfiles.helpers({
  file: function(){
    var year = Meteor.user().profile.year;
    return Physicianfiles.find({"year": year}).fetch().reverse();
  }
});

Template.physicianfiles.events({
  'click .reload': function () {
      setTimeout(function(){
        window.location.reload(1);
      }, 5000);
  }
});
