import { createSlice, PayloadAction } from 'redux-starter-kit';
import { VideoProperties } from 'youtube-api';

interface SelectVideoState {
  selectedVideo?: VideoProperties;
}

interface SelectVideoActionPayload {
  videoProperties: VideoProperties;
}

const initialState: SelectVideoState = {};

const selectVideoSlice = createSlice({
  name: 'selectVideo',
  initialState,
  reducers: {
    selectVideo: (state, action: PayloadAction<SelectVideoActionPayload>) => {
      state.selectedVideo = action.payload.videoProperties;
    },
  },
});

export const { selectVideo } = selectVideoSlice.actions;

export default selectVideoSlice.reducer;
