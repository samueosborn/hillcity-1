Template.churchfiles.events({
  "change .theofile": function(event, template){
     FS.Utility.eachFile(event,function(file) {
       var fileObj = new FS.File(file);
       fileObj.year = Meteor.user().profile.year;
       Churchfiles.insert(fileObj, function(err) {
         console.log(err);
       })
     })
  }
});

Template.churchfiles.helpers({
  file: function() {
    var year = Meteor.user().profile.year;
    return Churchfiles.find({"year": year}).fetch().reverse();
  }
});

Template.agribusinessfiles.events({
  'click .reload': function () {
      setTimeout(function(){
        window.location.reload(1);
      }, 1000);
  }
});
