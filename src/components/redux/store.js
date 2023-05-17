import { createStore } from 'redux';

const initialState = {
  contacts: {
    total_items: 0,
    items: [],
  },
};

const rootReducer = (state = initialState, action) => {
  return state;
};

export const store = createStore(rootReducer);
