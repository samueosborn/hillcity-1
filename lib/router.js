Router.route('/', function () {
  this.render('welcome');
  this.layout('logslayout');
});

Router.route('/signin', function () {
  this.render('signin');
  this.layout('layout');
});

Router.route('/join', function () {
  this.render('join');
  this.layout('layout');
});

//BUSINESS

Router.route('/agribusinessfiles', function () {
  this.layout('business');
  this.subscribe('agribusinessfiles').wait();

  if (this.ready()) {
    this.render('agribusinessfiles');
  } else {
    this.render('Loading');
  }
});

Router.route('/bankingfiles', function () {
  this.layout('business');
  this.subscribe('bankingfiles').wait();

  if (this.ready()) {
    this.render('bankingfiles');
  } else {
    this.render('Loading');
  }
});

Router.route('/hrmgtfiles', function () {
  this.layout('business');
  this.subscribe('hrmgtfiles').wait();

  if (this.ready()) {
    this.render('hrmgtfiles');
  } else {
    this.render('Loading');
  }
});

Router.route('/marketingfiles', function () {
  this.layout('business');
  this.subscribe('marketingfiles').wait();

  if (this.ready()) {
    this.render('marketingfiles');
  } else {
    this.render('loading');
  }
});

Router.route('/mgtstudiesfiles', function () {
  this.layout('business');
  this.subscribe('mgtstudiesfiles').wait();

  if (this.ready()) {
    this.render('mgtstudiesfiles');
  } else {
    this.render('loading');
  }
});

Router.route('/busibuzz', function () {
  this.layout('business');
  this.subscribe('buzz').wait();

  if (this.ready()) {
    this.render('buzz');
  } else {
    this.render('loading');
  }
});

Router.route('/busimarket', function () {
  this.layout('business');
  this.subscribe('market').wait();

  if (this.ready()) {
    this.render('market');
  } else {
    this.render('loading');
  }
});


//ARTS & SOCIAL SCIENCE

Router.route('/communicationfiles', function () {
  this.layout('arts&socialscience');
  this.subscribe('communicationfiles').wait();

  if (this.ready()) {
    this.render('communicationfiles');
  } else {
    this.render('loading');
  }
});

Router.route('/economicsfiles', function () {
  this.layout('arts&socialscience');
  this.subscribe('economicsfiles').wait();

  if (this.ready()) {
    this.render('economicsfiles');
  } else {
    this.render('loading');
  }
});

Router.route('/englishfiles', function () {
  this.layout('arts&socialscience');
  this.subscribe('englishfiles').wait();

  if (this.ready()) {
    this.render('englishfiles');
  } else {
    this.render('loading');
  }
});

Router.route('/frenchfiles', function () {
  this.layout('arts&socialscience');
  this.subscribe('frenchfiles').wait();

  if (this.ready()) {
    this.render('frenchfiles');
  } else {
    this.render('loading');
  }
});

Router.route('/environmmentfiles', function () {
  this.layout('arts&socialscience');
  this.subscribe('environmmentfiles').wait();

  if (this.ready()) {
    this.render('environmmentfiles');
  } else {
    this.render('loading');
  }
});

Router.route('/artsbuzz', function () {
  this.layout('arts&socialscience');
  this.subscribe('buzz').wait();

  if (this.ready()) {
    this.render('buzz');
  } else {
    this.render('loading');
  }
});

Router.route('/artsmarket', function () {
  this.render('artsmarket');
  this.layout('arts&socialscience');
  this.subscribe('market').wait();

  if (this.ready()) {
    this.render('market');
  } else {
    this.render('loading');
  }
});

//APPLIED SCIENCE

Router.route('/architecturefiles', function () {
  this.layout('appliedscience');
  this.subscribe('architecturefiles').wait();

  if (this.ready()) {
    this.render('architecturefiles');
  } else {
    this.render('loading');
  }
});

Router.route('/civilfiles', function () {
  this.layout('appliedscience');
  this.subscribe('civilfiles').wait();

  if (this.ready()) {
    this.render('civilfiles');
  } else {
    this.render('loading');
  }
});

Router.route('/nursingfiles', function () {
  this.layout('appliedscience');
  this.subscribe('nursingfiles').wait();

  if (this.ready()) {
    this.render('nursingfiles');
  } else {
    this.render('loading');
  }
});

Router.route('/pharmacyfiles', function () {
  this.layout('appliedscience');
  this.subscribe('pharmacyfiles').wait();

  if (this.ready()) {
    this.render('pharmacyfiles');
  } else {
    this.render('loading');
  }
});

Router.route('/physicianfiles', function () {
  this.layout('appliedscience');
  this.subscribe('physicianfiles').wait();

  if (this.ready()) {
    this.render('physicianfiles');
  } else {
    this.render('loading');
  }
});

Router.route('/sciencebuzz', function () {
  this.layout('appliedscience');
  this.subscribe('buzz').wait();

  if (this.ready()) {
    this.render('buzz');
  } else {
    this.render('loading');
  }
});

Router.route('/sciencemarket', function () {
  this.layout('appliedscience');
  this.subscribe('market').wait();

  if (this.ready()) {
    this.render('market');
  } else {
    this.render('loading');
  }
});

//THEOLOGY

Router.route('/biblicalfiles', function () {
  this.layout('theology');
  this.subscribe('biblicalfiles').wait();

  if (this.ready()) {
    this.render('biblicalfiles');
  } else {
    this.render('loading');
  }
});

Router.route('/christianfiles', function () {
  this.layout('theology');
  this.subscribe('christianfiles').wait();

  if (this.ready()) {
    this.render('christianfiles');
  } else {
    this.render('loading');
  }
});

Router.route('/churchfiles', function () {
  this.layout('theology');
  this.subscribe('churchfiles').wait();

  if (this.ready()) {
    this.render('churchfiles');
  } else {
    this.render('loading');
  }
});

Router.route('/theologyfiles', function () {
  this.layout('theology');
  this.subscribe('theologyfiles').wait();

  if (this.ready()) {
    this.render('theologyfiles');
  } else {
    this.render('loading');
  }
});

Router.route('/theobuzz', function () {
  this.layout('theology');
  this.subscribe('buzz').wait();

  if (this.ready()) {
    this.render('buzz');
  } else {
    this.render('loading');
  }
});

Router.route('/theomarket', function () {
  this.layout('theology');
  this.subscribe('market').wait();

  if (this.ready()) {
    this.render('market');
  } else {
    this.render('loading');
  }
});

//SEARCH & SELL

Router.route('/search', function () {
  this.layout('layout');
  this.subscribe('market').wait();

  if (this.ready()) {
    this.render('searchBox');
  } else {
    this.render('loading');
  }
});

Router.route('/buzzupdate', function () {
  this.layout('layout');

  if (this.ready()) {
    this.render('buzzupdate');
  } else {
    this.render('loading');
  }
});

Router.route('/sell', function () {
  this.layout('layout');

  if (this.ready()) {
    this.render('marketupdate');
  } else {
    this.render('loading');
  }
});