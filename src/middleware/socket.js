export const socketMiddleware = socket => store => next => action => {
  if (action.type === '@@redux-form/CHANGE') {
    if (!action.from) {
      socket.emit('formActions', action);
    }

  }
  return next(action);
};