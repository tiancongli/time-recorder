import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const APP = {
  HEIGHT: height,
  WIDTH: width,
  HOUR: 3600000
};

export const RECORD = {
  LENGTH: 7
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
  [CATEGORY.STUDY]: 'dodgerblue',
  [CATEGORY.WORK]: 'lightslategrey',
  [CATEGORY.ZEN]: 'coral',
  [CATEGORY.PHONE]: 'gold',
  [CATEGORY.GAME]: 'blueviolet',
  [CATEGORY.MUSIC]: 'lawngreen',
  [CATEGORY.FUN]: 'olive',
  [CATEGORY.UNDISTRIBUTED]: 'bisque'
};

export const CATEGORY_BG = {
  [CATEGORY.STUDY]: {
    backgroundColor: CATEGORY_COLOR.STUDY,
  },
  [CATEGORY.WORK]: {
    backgroundColor: CATEGORY_COLOR.WORK,
  },
  [CATEGORY.ZEN]: {
    backgroundColor: CATEGORY_COLOR.ZEN
  },
  [CATEGORY.PHONE]: {
    backgroundColor: CATEGORY_COLOR.PHONE
  },
  [CATEGORY.GAME]: {
    backgroundColor: CATEGORY_COLOR.GAME
  },
  [CATEGORY.MUSIC]: {
    backgroundColor: CATEGORY_COLOR.MUSIC
  },
  [CATEGORY.FUN]: {
    backgroundColor: CATEGORY_COLOR.FUN
  },
  [CATEGORY.UNDISTRIBUTED]: {
    backgroundColor: CATEGORY_COLOR.UNDISTRIBUTED
  }
}

export const CATEGORY_RGB = {
  [CATEGORY.STUDY]: [30, 144, 255],
  [CATEGORY.WORK]: [119, 136, 153],
  [CATEGORY.ZEN]: [255, 127, 80],
  [CATEGORY.PHONE]: [255, 215, 0],
  [CATEGORY.GAME]: [138, 43, 226],
  [CATEGORY.MUSIC]: [124, 252, 0],
  [CATEGORY.FUN]: [128, 128, 0],
  [CATEGORY.UNDISTRIBUTED]: [255, 228, 196]
};


export const OVERLAY = {
  OVERLAY_SIZE: height * 0.6
};