var chalk = require('chalk'),
    dateformat = require('dateformat'),
    col = module.exports = factory();

function factory(text, color) {
    return function(fmt) {
        var args = Array.prototype.slice.call(arguments),
            str  = '[' + chalk.grey(dateformat(new Date(), 'HH:MM:ss')) + ']';
        if (text)
            str += ' ' + chalk.bold[color](text) + ' ';
        if (args.length) {
            if (typeof fmt === 'string')
                args[0] = str + ' ' +fmt;
            else 
                args.unshift(str);
            console.log.apply(console, args);
        } else {
            console.log(str);
        }
        return col;
    };
}

col.info = factory('[INFO ]', 'white');
col.warn = factory('[WARN ]', 'yellow');
col.done = factory('[DONE ]', 'green'); //green cyan
col.error = factory('[ERROR]', 'red'); //red magenta
