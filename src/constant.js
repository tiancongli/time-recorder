import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const APP = {
  HEIGHT: height,
  WIDTH: width,
  HOUR: 3600000
};

export const BLOCK = {
  CONTENT_SIZE: width * 0.2,
  MARGIN: width * 0.05,
  TEXT_SIZE: 25,
  ADD_TEXT_SIZE: 50
};

export const CATEGORY = {
  STUDY: 'STUDY',
  WORK: 'WORK',
  ZEN: 'ZEN',
  PHONE: 'PHONE',
  GAME: 'GAME',
  MUSIC: 'MUSIC',
  FUN: 'FUN',
  UNDISTRIBUTED: 'UNDISTRIBUTED'
};

export const CATEGORY_COLOR = {
  STUDY: 'dodgerblue',
  WORK: 'lightslategrey',
  ZEN: 'coral',
  PHONE: 'gold',
  GAME: 'blueviolet',
  MUSIC: 'lawngreen',
  FUN: 'olive',
  UNDISTRIBUTED: 'whitesmoke'
};


export const OVERLAY = {
  OVERLAY_SIZE: height * 0.6
};