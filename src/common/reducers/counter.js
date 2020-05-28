import { action, thunk } from 'easy-peasy';

export default {
  count: 0,
  // actions
  increment: action(state => {
    state.count += 1;
  }),
  decrement: action(state => {
    state.count -= 1;
  }),

  // thunks
  incrementIfOdd: thunk((actions, payload, { getState }) => {
    const { count } = getState().count;
    if (count % 2 === 0) {
      return;
    }
    // return dispatch(actions.increment());
    actions.increment();
  }),
  incrementAsync: thunk((actions, delay = 1000) => {
    setTimeout(() => actions.increment(), delay);
  }),
};
