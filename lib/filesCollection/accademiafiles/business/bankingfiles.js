Bankingfiles = new FS.Collection('bankingfiles', {
  stores: [new FS.Store.FileSystem('bankingfiles',{path: './files'})]
});
