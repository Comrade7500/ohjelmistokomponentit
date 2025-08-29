import * as React from 'react';
import CounterDisplay from './CounterDisplay';
import Kasvatus from './Kasvatus';
import Nollaus from './Nollaus';
import Vahennys from './Vahennys';
import TuplaKasvatus from './TuplaKasvatus';

const initialState = { laskuri: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'KASVATA':
      return { laskuri: state.laskuri + 1 };
    case 'VAHENNA':
      return { laskuri: state.laskuri - 1 };
    case 'NOLLAA':
      return { laskuri: 0 };
    case 'TUPLA_KASVATUS':
      return { laskuri: state.laskuri + 2 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <div>
      <CounterDisplay count={state.laskuri} />
      <Kasvatus onClick={() => dispatch({ type: 'KASVATA' })} />
      <Vahennys onClick={() => dispatch({ type: 'VAHENNA' })} />
      <Nollaus onClick={() => dispatch({ type: 'NOLLAA' })} />
      <TuplaKasvatus onClick={() => dispatch({ type: 'TUPLA_KASVATUS' })} />
    </div>
  );
}

export default Counter;
