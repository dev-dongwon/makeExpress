const debug = (tag) => {
    if (!tag) throw Error('tag should be required');
    
    return (message) => {
        const logString = '\x1b[35m' + `[${tag}]` + '\x1b[0m' +  `: ${message}`;
        console.log(logString);
        return logString;
    }
}
  
  module.exports = debug;