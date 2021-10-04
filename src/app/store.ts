import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer, { RootState } from './rootReducer';

declare let module: any;

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    Boolean(Number(process.env.REACT_APP_REDUX_LOGGER))
      ? getDefaultMiddleware({ serializableCheck: false }).concat(logger)
      : getDefaultMiddleware({ serializableCheck: false }),
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', async () => {
    const newRootReducer = await import('./rootReducer');
    store.replaceReducer(newRootReducer.default);
  });
}

export type AppDispatch = typeof store.dispatch;

export type RootStateType = ReturnType<typeof rootReducer>;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
