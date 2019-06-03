const middleware = () => {
    const middlewares = [];
  
    const add = (func) => {
        middleware.push(func)
    }


    return {
      middlewares,
      add,
    }
  }
  
  module.exports = middleware;
  