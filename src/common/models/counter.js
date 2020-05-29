import { action, thunk } from 'easy-peasy';
import fetchCounter from '../api/counter';

export default {
  count: 0,
  // actions
  set: action((state, count) => {
    state.count = count;
  }),
  increment: action(state => {
    state.count += 1;
  }),
  decrement: action(state => {
    state.count -= 1;
  }),

  // thunks
  incrementIfOdd: thunk((actions, payload, { getState }) => {
    const { count } = getState();
    if (count % 2 === 0) {
      return;
    }
    // return dispatch(actions.increment());
    actions.increment();
  }),
  incrementAsync: thunk((actions, delay = 1000) => {
    setTimeout(() => actions.increment(), delay);
  }),
  incrementAtRandom: thunk(async actions => {
    const res = await fetchCounter();
    console.log(res);
    actions.set(res);
  })
};
