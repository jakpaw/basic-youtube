import { shallow } from 'enzyme';
import React from 'react';
import { mockVideoProperties } from 'testMocks';
import { setupMockStore } from 'testUtils';
import Video from './Video';

test('Video shows a message when no video is selected', () => {
  setupMockStore();

  const video = shallow(<Video />);
  expect(video.text()).toBe('Please select a video from search results');
});

test('Video shows an iframe with youtube video', () => {
  setupMockStore({
    selectVideo: {
      selectedVideo: mockVideoProperties,
    },
  });

  const video = shallow(<Video />);
  const iframe = video.find('iframe');

  expect(iframe.exists()).toBe(true);
  expect(iframe.prop('src')).toBe('https://www.youtube.com/embed/testId?autoplay=1');
});
