exports.config = {
  jasmineNodeOpts: {
    defaultTimeoutInterval: 60000
  },
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['automaticTesting.js'],
  multiCapabilities: [{
  	browserName:'chrome'
  }]
};

//test
