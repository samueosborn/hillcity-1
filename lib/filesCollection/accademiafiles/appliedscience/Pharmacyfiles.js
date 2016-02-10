Pharmacyfiles = new FS.Collection('pharmacyfiles', {
  stores: [new FS.Store.FileSystem('pharmacyfiles',{path: './files'})]
});
