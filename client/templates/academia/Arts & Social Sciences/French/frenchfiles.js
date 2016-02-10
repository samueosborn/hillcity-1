Template.frenchfiles.events({
  "change .artsfile": function(event, template){
     FS.Utility.eachFile(event,function(file) {
       var fileObj = new FS.File(file);
       fileObj.year = Meteor.user().profile.year;
       Frenchfiles.insert(fileObj, function(err) {
         console.log(err);
       })
     })
  }
});

Template.frenchfiles.helpers({
  file: function(){
    var year = Meteor.user().profile.year;
    return Frenchfiles.find({"year": year}).fetch().reverse();
  }
});

Template.frenchfiles.events({
  'click .reload': function () {
      setTimeout(function(){
        window.location.reload(1);
      }, 5000);
  }
});
