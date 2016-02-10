Template.lawfiles.events({
  "change .Inputfile": function(event, template){
     FS.Utility.eachFile(event,function(file) {
       var fileObj = new FS.File(file);
       fileObj.year = Meteor.user().profile.year;
       Lawfiles.insert(fileObj, function(err) {
         console.log(err);
       })
     })
  }
});

Template.lawfiles.helpers({
  file: function(){ 
    var year = Meteor.user().profile.year;
    return Lawfiles.find({"year": year}).fetch().reverse();
  }
});

Template.lawfiles.events({
  'click .reload': function () {
      setTimeout(function(){
        window.location.reload(1);
      }, 5000);
  }
});
