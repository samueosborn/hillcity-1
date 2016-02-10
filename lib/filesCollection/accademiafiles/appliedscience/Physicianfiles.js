Physicianfiles = new FS.Collection('physicianfiles', {
  stores: [new FS.Store.FileSystem('physicianfiles',{path: './files'})]
});
