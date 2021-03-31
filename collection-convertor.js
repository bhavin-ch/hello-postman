const fs = require('fs');
const Converter = require('openapi-to-postmanv2');
const openapiData = fs.readFileSync(`${process.cwd()}/petstore.yaml`, { encoding: 'utf-8' });

// Converter.convert({ type: 'file', data: `${process.cwd()}/petstore.yaml` }, {
Converter.convert({ type: 'string', data: openapiData }, {
    collapseFolders: false,
    folderStrategy: 'Paths'
}, (err, conversionResult) => {
    if (!conversionResult.result) {
        console.log('Could not convert', conversionResult.reason);
    } else {
        // console.log('The collection object is: ', JSON.stringify(conversionResult.output, null, 2));
        fs.writeFileSync(`${process.cwd()}/postman/petstore.json`, JSON.stringify(conversionResult.output[0].data, null, 2), { flag: 'wx' });
    }
  }
);