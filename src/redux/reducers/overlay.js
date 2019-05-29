import { SHOW_OVERLAY, HIDE_OVERLAY } from '../actionTypes';

const initialState = {
  visible: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SHOW_OVERLAY: {
      return {
        visible: true   
      }
    }
    case HIDE_OVERLAY: {
      return {
        visible: false   
      }
    }
    default:
      return state;
  }
}