/*
 * Logger middleware
 * */

const loggerMiddleware = () => next => action => {
  // TODO: define prod/dev ENV based variables to apply logger only in development mode
  // console.log(action.type);
  next(action);
};

export default loggerMiddleware;
