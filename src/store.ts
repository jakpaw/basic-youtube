import searchReducer from 'features/search/searchSlice';
import selectVideoReducer from 'features/selectVideo/selectVideoSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { combineReducers } from 'redux';
import { configureStore } from 'redux-starter-kit';

const rootReducer = combineReducers({
  search: searchReducer,
  selectVideo: selectVideoReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const useTypedDispatch = () => useDispatch<typeof store.dispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
