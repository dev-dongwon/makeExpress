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

    const runMiddleWare = (index) => {
        if (index < 0 || middlewares.length < index) {
            return;
        }

        const nextMiddleWare = middlewares[index];
        const next = () => runMiddleWare(index+1);

        nextMiddleWare(request, response, next);
    }


    return {
      middlewares,
      add,
    }
  }
  
  module.exports = middleware;
  