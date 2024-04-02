const cid = require("multiformats/cid").CID.parse(process.argv[2]);
console.log(cid.toV0().toString());
