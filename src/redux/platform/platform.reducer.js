import { generateRundomNumArray } from "./platform.utilities";

import actionType from "./platform.action.type";

const INITIAL_STATE = {
  platformData: generateRundomNumArray(),
  counter:0,
};

const platformReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionType.TAKE_ID:
      return {
        ...state,
        platformData: action.payload,
        counter:state.counter+1,
        // className:'empty-box-bgc'

      };

    case actionType.GENERATE_RUNDOM_NUMS:
      return {
        ...state,
        platformData: generateRundomNumArray(),
        counter:0
      };

    default:
      return state;
  }
};

export default platformReducer;
