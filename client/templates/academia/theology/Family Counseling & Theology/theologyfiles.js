Template.theologyfiles.events({
  "change .theofile": function(event, template){
     FS.Utility.eachFile(event,function(file) {
       var fileObj = new FS.File(file);
       fileObj.year = Meteor.user().profile.year;
       Theologyfiles.insert(fileObj, function(err) {
         console.log(err);
       })
     })
  }
});

Template.theologyfiles.helpers({
  file: function(){
    var year = Meteor.user().profile.year;
    return Theologyfiles.find({"year": year}).fetch().reverse();
  }
});

Template.theologyfiles.events({
  'click .reload': function () {
      setTimeout(function(){
        window.location.reload(1);
      }, 5000);
  }
});
