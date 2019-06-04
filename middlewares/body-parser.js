const debug = require('../utils/debug')('body-parser');

const bodyParser = () => (req, res, next) => {
  let body = [];
  let bodyObj = {};

  req.on('data', chunk => {
    body = chunk.toString().split('&');
  })

  req.on('end', () => {
    if (body.length === 0) {
      next();
      return;
    }

    bodyObj = body.reduce((acc, query) => {
      const queryObjArr = query.split('=');
      const key = queryObjArr[0];
      const value = queryObjArr[1];
      acc[key] = value;
      return acc;
    },{});

    debug(`requestBody : ${JSON.stringify(bodyObj)}`);
    req.body = bodyObj;

    next();
  })
}

module.exports = bodyParser;