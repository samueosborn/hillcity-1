Template.biblicalfiles.events({
  "change .theofile": function(event, template){
     FS.Utility.eachFile(event,function(file) {
       var fileObj = new FS.File(file);
       fileObj.year = Meteor.user().profile.year;
       Biblicalfiles.insert(fileObj, function(err) {
         console.log(err);
       })
     })
  }
});

Template.biblicalfiles.helpers({
  file: function(){
    var year = Meteor.user().profile.year;
    return Biblicalfiles.find({"year": year}).fetch().reverse();
  }
});

Template.biblicalfiles.events({
  'click .reload': function () {
      setTimeout(function(){
        window.location.reload(1);
      }, 5000);
  }
});
