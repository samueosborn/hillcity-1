Template.bankingfiles.events({
  "change .Inputfile": function(event, template){
     FS.Utility.eachFile(event,function(file) {
       var fileObj = new FS.File(file);
       fileObj.year = Meteor.user().profile.year;
       Bankingfiles.insert(fileObj, function(err) {
         console.log(err);
       })
     })
  }
});

Template.bankingfiles.helpers({
  file: function(){
    var year = Meteor.user().profile.year;
    return Bankingfiles.find({"year": year}).fetch().reverse();
  }
});

Template.bankingfiles.events({
  'click .reload': function () {
      setTimeout(function(){
        window.location.reload(1);
      }, 5000);
  }
});
