import { createSlice, PayloadAction } from 'redux-starter-kit';
import { Action } from 'redux-starter-kit';
import { ThunkAction as GenericThunkAction } from 'redux-thunk';
import { RootState } from 'store';
import { searchVideos, VideoProperties } from 'youtube-api';

type ThunkAction = GenericThunkAction<void, RootState, null, Action<string>>;

interface SearchState {
  submittedQuery: string;
  status: 'initial' | 'loading' | 'ready' | 'error';
  results: VideoProperties[];
}

interface SubmitSearchQueryPayload {
  query: string;
}

interface FetchSearchResultsSuccessPayload {
  results: VideoProperties[];
}

const initialState: SearchState = {
  submittedQuery: '',
  status: 'initial',
  results: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    fetchSearchResultsStart: (state, action: PayloadAction<SubmitSearchQueryPayload>) => {
      state.submittedQuery = action.payload.query;
      state.results = [];
      state.status = 'loading';
    },
    fetchSearchResultsSuccess: (state, action: PayloadAction<FetchSearchResultsSuccessPayload>) => {
      state.results = action.payload.results;
      state.status = 'ready';
    },
    fetchSearchResultsError: (state) => {
      state.results = [];
      state.status = 'error';
    },
  },
});

export const {
  fetchSearchResultsStart,
  fetchSearchResultsSuccess,
  fetchSearchResultsError,
} = searchSlice.actions;

export default searchSlice.reducer;

export const submitSearchQuery = (searchQuery: string): ThunkAction => async (dispatch) => {
  try {
    dispatch(fetchSearchResultsStart({ query: searchQuery }));
    const results = await searchVideos(searchQuery);
    dispatch(fetchSearchResultsSuccess({ results }));
  } catch (err) {
    dispatch(fetchSearchResultsError());
  }
};
