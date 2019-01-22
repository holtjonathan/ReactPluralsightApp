//dynamic imports aren't supposed in ES6 (having to use requires instead)
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./configureStore.prod');
} else {
    module.exports = require('./configureStore.dev');
}