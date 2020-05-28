import React from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

const Counter = () => {
  const increment = useStoreActions(actions => actions.counter.increment);
  const decrement = useStoreActions(actions => actions.counter.decrement);
  const incrementIfOdd = useStoreActions(actions => actions.counter.incrementIfOdd);
  const incrementAsync = useStoreActions(actions => actions.counter.incrementAsync);
  const counter = useStoreState(state => state.counter.count);
  return (
    <>
      <p>
        Clicked:
        {' '}
        {counter}
        {' '}
        times
        {' '}
        <button type="button" onClick={increment}>
          +
        </button>
        {' '}
        <button type="button" onClick={decrement}>
          -
        </button>
        {' '}
        <button type="button" onClick={incrementIfOdd}>
          Increment if odd
        </button>
        {' '}
        <button type="button" onClick={() => incrementAsync()}>
          Increment async
        </button>
      </p>
    </>
  );
};

export default Counter;
