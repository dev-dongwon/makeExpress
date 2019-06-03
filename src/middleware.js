const middleware = () => {
    const middlewares = [];
    const request, response;

    const add = (func) => {
        middleware.push(func)
    }

    const run = (req, res) => {
        request = req;
        response = res;
        runMiddleWare(0);
    }

    const runMiddleWare = (index, err) => {
        if (index < 0 || middlewares.length < index) {
            return;
        }

        if (err) {
            const isErrorParam = nextMiddleWare.length === 4;
            return isErrorParam ? nextMiddleWare(err, request, response, next) : runMiddleWare(index+1, err);
        }

        const nextMiddleWare = middlewares[index];
        const next = (err) => runMiddleWare(index+1, err);

        nextMiddleWare(request, response, next);
    }


    return {
      middlewares,
      add,
    }
  }
  
  module.exports = middleware;
  