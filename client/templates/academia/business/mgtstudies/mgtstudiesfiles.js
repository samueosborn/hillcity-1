Template.mgtstudiesfiles.events({
  "change .Inputfile": function(event, template){
     FS.Utility.eachFile(event,function(file) {
       var fileObj = new FS.File(file);
       fileObj.year = Meteor.user().profile.year;
       Mgtstudiesfiles.insert(fileObj, function(err) {
         console.log(err);
       })
     })
  }
});

Template.mgtstudiesfiles.helpers({
  file: function(){
    var year = Meteor.user().profile.year;
    return Mgtstudiesfiles.find({"year": year}).fetch().reverse();
  }
});

Template.mgtstudiesfiles.events({
  'click .reload': function () {
      setTimeout(function(){
        window.location.reload(1);
      }, 5000);
  }
});
