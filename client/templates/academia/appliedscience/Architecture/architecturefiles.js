Template.architecturefiles.events({
  "change .sciencefile": function(event, template){
     FS.Utility.eachFile(event,function(file) {
       var fileObj = new FS.File(file);
       fileObj.year = Meteor.user().profile.year;
       Architecturefiles.insert(fileObj, function(err) {
         console.log(err);
       })
     })
  }
});

Template.architecturefiles.helpers({
  file: function(){
    var year = Meteor.user().profile.year;
    return Architecturefiles.find({"year": year}).fetch().reverse();
  }
});

Template.architecturefiles.events({
  'click .reload': function () {
      setTimeout(function(){
        window.location.reload(1);
      }, 5000);
  }
});
