import { combineReducers, configureStore } from '@reduxjs/toolkit';
import repeats from './slices/repeats';

const rootReducer = combineReducers({
  repeatsList: repeats,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
