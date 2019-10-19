import { createSlice, PayloadAction } from 'redux-starter-kit';

interface SelectVideoState {
  selectedVideoId?: string;
}

interface SelectVideoActionPayload {
  videoId: string;
}

const initialState: SelectVideoState = {};

const selectVideoSlice = createSlice({
  name: 'selectVideo',
  initialState,
  reducers: {
    selectVideo: (state, action: PayloadAction<SelectVideoActionPayload>) => {
      state.selectedVideoId = action.payload.videoId;
    },
  },
});

export const { selectVideo } = selectVideoSlice.actions;

export default selectVideoSlice.reducer;
