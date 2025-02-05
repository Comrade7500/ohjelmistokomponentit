import * as React from 'react'
 
function App() {
  const [count, setCount] = React.useState(0) //alkuarvo on 0
 
  const laskuri = () =>{
    setCount(count +1) //setCount-funktiolla päivitetään nykyistä arvoa count
  }
  const vahennys = () =>{
    setCount(count -1) //setCount-funktiolla päivitetään nykyistä arvoa count
  }
  const nollaus = () =>{
    setCount(0) //setCount-funktiolla päivitetään nykyistä arvoa count
  }
 
 
  return (
    <div>
      <p>Nykyinen arvo: {count}</p>
      <button onClick={laskuri}>Kasvata Lukemaa</button> {/*Tapahtumankäsittelijä */}

        <button onClick={vahennys}>Vähennä Lukemaa</button> {/*Tapahtumankäsittelijä */}
        
        <button onClick={nollaus}>Nollaa</button> {/*Tapahtumankäsittelijä */}
      </div>
  )
}
export default App