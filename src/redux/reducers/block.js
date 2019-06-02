import { ADD_BLOCK, START_BLOCK, STOP_BLOCK} from "../actionTypes";
import { BlockModel } from "../../models";
import { APP, CATEGORY } from "../../constant";

const example = [
  new BlockModel('A', CATEGORY.GAME, 2*APP.HOUR),
  new BlockModel('A', CATEGORY.ZEN, 2*APP.HOUR),
  new BlockModel('A', CATEGORY.WORK, 2*APP.HOUR),
  new BlockModel('A', CATEGORY.STUDY, 2*APP.HOUR),
];

const initialState = {
  // todo get these from localStorage
  blocks: example
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_BLOCK: {
      const { name, category } = action.payload;
      return {
        blocks: [...state.blocks, new BlockModel(name, category)]
      }
    }
    case START_BLOCK: {
      return startBlock(state, action);
    }
    case STOP_BLOCK: {
      return stopBlock(state, action);
    }
    default:
      return state;
  }
}

const startBlock = (state, action) => {
  const index = action.payload;
  const block = state.blocks[index];
  if (!block.stop) {
    console.log(`block $index already start`);
    return state;
  }
  const newBlock = new BlockModel(
    name=block.name, 
    category=block.category, 
    acc=block.acc, 
    start=Date.now(), 
    stop=false);

  //todo store the `start` & `stop` in localStorage
  
  return {
    blocks: [...state.blocks.slice(0, index), 
      newBlock, 
      ...state.blocks.slice(index + 1)]
    };
};

const stopBlock = (state, action) => {
  const index = action.payload;
  const block = state.blocks[index];
  if (block.stop) {
    console.log(`block $index already stop`);
    return state;
  }
  const newBlock = new BlockModel(
    name=block.name,
    category=block.category,
    acc=Date.now() - block.start + block.acc,
    stop=true
  );
  //todo store the `acc` & `stop` in localStorage

  return {
    blocks: [...state.blocks.slice(0, index), 
      newBlock, 
      ...state.blocks.slice(index + 1)]
    };
};