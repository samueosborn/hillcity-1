Environmentfiles = new FS.Collection('environmentfiles', {
  stores: [new FS.Store.FileSystem('environmentfiles',{path: './files'})]
});
