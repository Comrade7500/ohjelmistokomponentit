import * as React from 'react';


function CounterDisplay({ count }) {
  return <p>Nykyinen arvo: {count}</p>;
}


function Kasvatus({ onClick }) {
  return <button onClick={onClick}>Kasvata Lukemaa</button>;
}


function Vahennys({ onClick }) {
  return <button onClick={onClick}>Vähennä Lukemaa</button>;
}


function Nollaus({ onClick }) {
  return <button onClick={onClick}>Nollaa</button>;
}


function TuplaKasvatus({ onClick }) {
  return <button onClick={onClick}>Tuplakasvatus</button>;
}

function App() {
  const [count, setCount] = React.useState(0);

  const laskuri = () => setCount(count + 1);
  const vahennys = () => setCount(count - 1);
  const nollaus = () => setCount(0);
  const tuplaKasvatus = () => setCount(count + 2);

  return (
    <div>
      <CounterDisplay count={count} />
      <Kasvatus onClick={laskuri} />
      <Vahennys onClick={vahennys} />
      <Nollaus onClick={nollaus} />
      <TuplaKasvatus onClick={tuplaKasvatus} />
    </div>
  );
}

export default App;
