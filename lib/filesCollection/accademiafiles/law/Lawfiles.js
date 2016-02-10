Lawfiles = new FS.Collection('lawfiles', {
  stores: [new FS.Store.FileSystem('lawfiles',{path: './files'})]
});
