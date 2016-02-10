Template.pharmacyfiles.events({
  "change .sciencefile": function(event, template){
     FS.Utility.eachFile(event,function(file) {
      var fileObj = new FS.File(file);
       fileObj.year = Meteor.user().profile.year;
       Pharmacyfiles.insert(fileObj, function(err) {
         console.log(err);
       })
     })
  }
});

Template.pharmacyfiles.helpers({
  file: function(){
    var year = Meteor.user().profile.year;
    return Pharmacyfiles.find({"year": year}).fetch().reverse();
  }
});

Template.pharmacyfiles.events({
  'click .reload': function () {
      setTimeout(function(){
        window.location.reload(1);
      }, 5000);
  }
});
