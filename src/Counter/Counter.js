import {
  setCounterValue,
  getCounterValue,
} from '../reducer/stateManager';
import { useDispatch, useSelector } from 'react-redux';

export default function Counter(props) {
  const counterVal = useSelector(getCounterValue);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(props.onIncrementAsync())}>
        Increment after 1 second
      </button>
      {' '}
      <button onClick={() => dispatch(props.onIncrement())}>
        Increment
      </button>
      {' '}
      <button onClick={() => dispatch(props.onDecrement())}>
        Decrement
      </button>
      <hr />
      <div>
        Clicked: {counterVal} times
      </div>
    </div>
  );
}