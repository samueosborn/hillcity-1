Template.nursingfiles.events({
  "change .sciencefile": function(event, template){
     FS.Utility.eachFile(event,function(file) {
      var fileObj = new FS.File(file);
        fileObj.year = Meteor.user().profile.year;
       Nursingfiles.insert(fileObj, function(err) {
         console.log(err);
       })
     })
  }
});

Template.nursingfiles.helpers({
  file: function() {
    var year = Meteor.user().profile.year;
    return Nursingfiles.find({"year": year}).fetch().reverse();
  }
});

Template.nursingfiles.events({
  'click .reload': function () {
      setTimeout(function(){
        window.location.reload(1);
      }, 1000);
  }
});
