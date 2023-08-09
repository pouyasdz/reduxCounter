import { incrementAction,decrementAction, setZeroAction } from "./redux/actionCreators.js";
import { counterAction } from "./redux/actions.js";

const addBtn = document.querySelector("#btn-add");
const reloadBtn = document.querySelector("#btn-reload");
const removeBtn = document.querySelector("#btn-remove");

const numberElemnt = document.querySelector("#number");

function counterReducer(state = 0, action) {
  switch (action.type) {
    case counterAction.INCREMENT: {
      return state + 1;
      break;
    }

    case counterAction.DECREMENT: {
      return state - 1;
      break;
    }

    case counterAction.SET_ZERO: {
      return 0;
      break;
    }

    default: {
      return state;
      break;
    }
  }
}

const store = Redux.createStore(counterReducer);

// Handle Events
addBtn.addEventListener("click", () => {
  store.dispatch(incrementAction());
  const state = store.getState()
  numberElemnt.textContent = state;
});

reloadBtn.addEventListener("click", () => {
  store.dispatch(setZeroAction());
  const state = store.getState()
  numberElemnt.textContent = state;
});

removeBtn.addEventListener("click", () => {
  store.dispatch(decrementAction());
  const state = store.getState()
  numberElemnt.textContent = state;
});
