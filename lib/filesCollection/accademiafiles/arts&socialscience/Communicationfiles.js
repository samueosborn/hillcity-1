Communicationfiles = new FS.Collection('communicationfiles', {
  stores: [new FS.Store.FileSystem('communicationfiles',{path: './files'})]
});
