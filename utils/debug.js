const debug = (tag) => {
    if (!tag) throw Error('tag should be required');
    
    return (message) => {
        const logString = `[${tag}] : ${message}`;
        console.log(logString);
        return logString;
    }
}
  
  module.exports = debug;