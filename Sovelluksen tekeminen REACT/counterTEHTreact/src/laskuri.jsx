import * as React from 'react';
import CounterDisplay from './CounterDisplay';
import Kasvatus from './Kasvatus';
import Nollaus from './Nollaus';
import TuplaKasvatus from './TuplaKasvatus';
import Vahennys from './Vahennys';

function Counter() {
  const [count, setCount] = React.useState(0);

  const laskuri = () => setCount(count + 1);
  const vahennys = () => setCount(count - 1);
  const nollaus = () => setCount(0);
  const tuplaKasvatus = () => setCount(count + 2);

  return (
    <div>
      <CounterDisplay count={count} /> {/* This was missing an import */}
      <Kasvatus onClick={laskuri} />
      <Vahennys onClick={vahennys} />
      <Nollaus onClick={nollaus} />
      <TuplaKasvatus onClick={tuplaKasvatus} />
    </div>
  );
}

export default Counter;
