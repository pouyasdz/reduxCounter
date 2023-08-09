import { counterAction } from "./actions.js";

function incrementAction() {
  return { type: counterAction.INCREMENT };
}

function decrementAction() {
  return { type: counterAction.DECREMENT };
}

function setZeroAction() {
  return { type: counterAction.SET_ZERO };
}

export {incrementAction, decrementAction, setZeroAction};
