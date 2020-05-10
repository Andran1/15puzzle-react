import actionType from "./platform.action.type";

export const takeId = (cordinates) => ({
  type: actionType.TAKE_ID,
  payload: cordinates,
});

export const generateRundomNums = () => ({
  type: actionType.GENERATE_RUNDOM_NUMS,
});



