Template.environmmentfiles.events({
  "change .artsfile": function(event, template){
     FS.Utility.eachFile(event,function(file) {
      var fileObj = new FS.File(file);
        fileObj.year = Meteor.user().profile.year;
       Environmentfiles.insert(fileObj, function(err) {
         console.log(err);
       })
     })
  }
});

Template.environmmentfiles.helpers({
  file: function(){
    var year = Meteor.user().profile.year;
    return Environmentfiles.find({"year": year}).fetch().reverse();
  }
});

Template.environmmentfiles.events({
  'click .reload': function () {
      setTimeout(function(){
        window.location.reload(1);
      }, 5000);
  }
});
