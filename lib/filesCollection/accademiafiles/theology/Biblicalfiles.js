Biblicalfiles = new FS.Collection('biblicalfiles', {
  stores: [new FS.Store.FileSystem('biblicalfiles',{path: './files'})]
});
