require('babel-register');//register babel to transplie before our our code runs

//Disable webpack features that mocha dosent not understand
//in index.js we are using .css files , so it must be excluded

require.extensions['.css'] = function(){


};

