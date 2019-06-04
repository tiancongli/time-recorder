import { ADD_RECORD } from "../actionTypes";
import { CATEGORY, RECORD } from '../../constant'

const generateExample = () => {
  let obj = {};
  for (var key in CATEGORY) {
    obj[key] = Math.random() * 6;
  }
  return obj;
};

const example = Array.from({length: 7}, (v, k) => generateExample());

const initialState = {
  // todo get these from localStorage
  records: example
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_RECORD: {
      const record = action.payload;
      let newState = [...state.records, record];
      if (newState.length > RECORD.LENGTH) {
        newState = newState.slice(newState.length - RECORD.LENGTH);
      }
      return {
        records: newState
      }
    }
    default:
      return state;
  }
}