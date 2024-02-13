import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, reset } from './counterSlice';

const CounterView = () => {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </div>
  );
};

export default CounterView;
