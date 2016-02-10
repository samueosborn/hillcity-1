Template.communicationfiles.events({
  "change .artsfile": function(event, template){
     FS.Utility.eachFile(event,function(file) {
      var fileObj = new FS.File(file);
       fileObj.year = Meteor.user().profile.year;
       Communicationfiles.insert(fileObj, function(err) {
         console.log(err);
       })
     })
  }
});

Template.communicationfiles.helpers({
  file: function(){
    var year = Meteor.user().profile.year;
    return Communicationfiles.find({"year": year}).fetch().reverse();
  }
});

Template.communicationfiles.events({
  'click .reload': function () {
      setTimeout(function(){
        window.location.reload(1);
      }, 5000);
  }
});
 