const algoliasearch = require('algoliasearch');
const client = algoliasearch(process.env.APPID,process.env.APIKEY);
const index = client.initIndex('algolia-training');

const fs = require('fs');
console.log(fs.readFileSync('./assets/moviesLite.json', 'UTF8'));
