const fs = require('fs');
const rimraf = require('rimraf');
const Converter = require('openapi-to-postmanv2');
const project = process.argv[2];
const openapiSpecFile = `${process.cwd()}/postman/${project}/${process.argv[3]}`;
const postmanCollectionFile = `${process.cwd()}/postman/${project}/${process.argv[4]}`;

const openapiData = fs.readFileSync(openapiSpecFile, { encoding: 'utf-8' });

Converter.convert({ type: 'string', data: openapiData }, {
    collapseFolders: false,
    folderStrategy: 'Paths'
}, (err, conversionResult) => {
    if (!conversionResult.result) {
        console.log('Could not convert', conversionResult.reason);
    } else {
        rimraf.sync(postmanCollectionFile);
        fs.writeFileSync(postmanCollectionFile, JSON.stringify(conversionResult.output[0].data, null, 2), { flag: 'wx' });
    }
  }
);