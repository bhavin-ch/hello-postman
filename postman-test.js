const newman = require('newman'); // require newman in your project

// call newman.run to pass `options` object and wait for callback
newman.run({
    collection: require('./postman/hello-postman.json'),
    environment: require('./postman/hello-postman.postman_environment.json'),
    reporters: ['cli', 'json']
}, function (err) {
	if (err) { throw err; }
    console.log('collection run complete!');
});