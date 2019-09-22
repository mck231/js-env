// This file isn't transpiled, so mustuse CommonJs and ES5

// Register babel to transpile before our test run.
require('bable-register')();

// Disable webpack features that Mocha doesn't understan.
require.exstensions['.css'] = function() {};
