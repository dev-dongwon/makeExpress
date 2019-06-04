const bodyParser = () => (req, res, next) => {
  let body = [];

  req.on('data', chunk => {
    body.push(chunk)
    console.log('data', chunk);
  })

  req.on('end', () => {
    body = Buffer.concat(body).toString();
    console.log('end', body);
  })
}

module.exports = bodyParser;