import React, {useEffect, useState} from 'react';
import './App.css';
import getGifs from '../services/getGifs';

function App() {
  const [gifs, setGifs] = useState([])

  useEffect(function () {
    getGifs({ keyword: 'Badbunny' }).then(gifs => setGifs(gifs))
  }, [])
  return (
    <div className="App">
      <section className="App-content">
        Lambda Card
        {
          gifs.map(singleGif => <img alt=" " src={singleGif} />)
        }
      </section>
    </div>
  );
}

export default App;
