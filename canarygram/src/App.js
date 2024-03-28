import './App.css';

import Barry from './canarys/canary1.jpg'
import Robin from './canarys/canary2.jpg'
import Maurice from './canarys/canary3.jpg'
import Lesley from './canarys/canary4.jpg'
import Barbara from './canarys/canary5.jpg'

function App() {
  return (
    <div className="App">
      <header className='header-component'>
        <h1> canarygram</h1>
        <h3>canarygram is a place to share your favourite canarys</h3>
      </header>
      <ul className='post-list'>
        <li className='post-list'>
          <button>
            <img src={Barry} alt='Barry'/>
            <p>Barry</p>
          </button>
        </li>
        <li >
          <button>
            <img src={Robin} alt='Robin'/>
            <p>Robin</p>
          </button>
        </li>
        <li className='post-list'>
          <button>
            <img src={Maurice} alt='Maurice'/>
            <p>Maurice</p>
          </button>
        </li>
        <li className='post-list'>
          <button>
            <img src={Lesley} alt='Lesley'/>
            <p>Lesley</p>
          </button>
        </li>
        <li className='post-list'>
          <button>
            <img src={Barbara} alt='Barbara'/>
            <p>Barbara</p>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default App;
