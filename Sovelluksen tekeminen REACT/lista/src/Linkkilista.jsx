import * as React from 'react';

function Linkkilista({ lista }) {
    return (
      <ul>
        {lista.map((item, index) => (
          <li key={index}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.nimi}
            </a>
          </li>
        ))}
      </ul>
    );
  }

export default Linkkilista;