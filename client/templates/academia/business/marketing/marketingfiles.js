Template.marketingfiles.events({
  "change .Inputfile": function(event, template){
     FS.Utility.eachFile(event,function(file) {
       var fileObj = new FS.File(file);
        fileObj.year = Meteor.user().profile.year;
       Marketingfiles.insert(fileObj, function(err) {
         console.log(err);
       })
     })
  }
});

Template.marketingfiles.helpers({
  file: function(){
    var year = Meteor.user().profile.year;
    return Marketingfiles.find({"year": year}).fetch().reverse();
  }
});

Template.marketingfiles.events({
  'click .reload': function () {
      setTimeout(function(){
        window.location.reload(1);
      }, 5000);
  }
});
