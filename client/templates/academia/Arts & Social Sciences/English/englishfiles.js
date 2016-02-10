Template.englishfiles.events({
  "change .artsfile": function(event, template){
     FS.Utility.eachFile(event,function(file) {
      var fileObj = new FS.File(file);
       fileObj.year = Meteor.user().profile.year;
       Englishfiles.insert(fileObj, function(err) {
         console.log(err);
       })
     })
  }
});

Template.englishfiles.helpers({
  file: function(){
    var year = Meteor.user().profile.year;
    return Englishfiles.find({"year": year}).fetch().reverse();
  }
});

Template.englishfiles.events({
  'click .reload': function () {
      setTimeout(function(){
        window.location.reload(1);
      }, 5000);
  }
});
