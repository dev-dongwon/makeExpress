const logger = () => (req, res, next) => {
    const logString = '\x1b[36m' + `[${req.method}]` + '\x1b[0m' +  `: ${req.url}`;
    console.log(logString);
    next();
}

module.exports = logger;