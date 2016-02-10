Template.agribusinessfiles.events({
  "change .Inputfile": function(event, template){
     FS.Utility.eachFile(event,function(file) {
       var fileObj = new FS.File(file);
       fileObj.year = Meteor.user().profile.year;
       Agribusinessfiles.insert(fileObj, function(err) {
         console.log(err);
       })
     })
  }
});

Template.agribusinessfiles.helpers({
  file: function() {
    var year = Meteor.user().profile.year;
    return Agribusinessfiles.find({"year": year}).fetch().reverse();
  }
});

Template.agribusinessfiles.events({
  'click .reload': function () {
      setTimeout(function(){
        window.location.reload(1);
      }, 1000);
  }
});
