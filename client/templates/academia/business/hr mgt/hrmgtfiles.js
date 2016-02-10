Template.hrmgtfiles.events({
  "change .Inputfile": function(event, template){
     FS.Utility.eachFile(event,function(file) {
       var fileObj = new FS.File(file);
       fileObj.year = Meteor.user().profile.year;
       Hrmgtfiles.insert(fileObj, function(err) {
         console.log(err);
       })
     })
  }
});

Template.hrmgtfiles.helpers({
  file: function(){
    var year = Meteor.user().profile.year;
    return Hrmgtfiles.find({"year": year}).fetch().reverse();
  }
});

Template.hrmgtfiles.events({
  'click .reload': function () {
      setTimeout(function(){
        window.location.reload(1);
      }, 5000);
  }
});
