import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { eventsReducer } from './eventsSlice';
import { filterReducer } from './filterslice';

const eventsPersistConfig = {
  key: 'events',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    events: persistReducer(eventsPersistConfig, eventsReducer),
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);