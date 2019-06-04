import { ADD_BLOCK, SHOW_OVERLAY, HIDE_OVERLAY, START_BLOCK, STOP_BLOCK, ADD_RECORD } from './actionTypes';

export const showOverlay = () => ({
  type: SHOW_OVERLAY
});

export const hideOverlay = () => ({
  type: HIDE_OVERLAY
});

export const addBlock = (name, category) => ({
  type: ADD_BLOCK,
  payload: {name, category}
});

export const startBlock = (index) => ({
  type: START_BLOCK,
  payload: index
});

export const stopBlock = (index) => ({
  type: STOP_BLOCK,
  payload: index
});

export const addRecord = (record) => ({
  type: ADD_RECORD,
  payload: record
});
