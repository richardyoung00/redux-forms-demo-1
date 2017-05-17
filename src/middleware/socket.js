export const socketMiddleware = socket => store => next => action => {
  if (action.type === '@@redux-form/CHANGE' || action.type === '@@redux-form/FOCUS' || action.type === '@@redux-form/BLUR') {
    if (!action.from) {
      socket.emit('formActions', action);
    }

  }
  return next(action);
};