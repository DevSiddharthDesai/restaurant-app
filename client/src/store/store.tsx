import { createStore, applyMiddleware, Action } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk, { ThunkAction } from 'redux-thunk';
import rootReducer from './root-reducer';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['categories', 'restaurant'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

const persistor = persistStore(store);

export { store, persistor };
