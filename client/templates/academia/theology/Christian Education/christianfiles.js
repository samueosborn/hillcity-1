Template.christianfiles.events({
  "change .theofile": function(event, template){
     FS.Utility.eachFile(event,function(file) {
       var fileObj = new FS.File(file);
       fileObj.year = Meteor.user().profile.year;
       Christianfiles.insert(fileObj, function(err) {
         console.log(err);
       })
     })
  }
});

Template.christianfiles.helpers({
  file: function(){
    var year = Meteor.user().profile.year;
    return Christianfiles.find({"year": year}).fetch().reverse();
  }
});

Template.christianfiles.events({
  'click .reload': function () {
      setTimeout(function(){
        window.location.reload(1);
      }, 5000);
  }
});
