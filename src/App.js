import logo from './logo.svg';
import './App.css';
import Animated from './Animated';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Animated
        className="flying-cloud"
        src="./cloud.png"
        ratioX="0.35"
        ratioY="0.32"
        />
        <Animated
        className="flying-cloud"
        src="./cloud.png"
        ratioX="0.25"
        ratioY="0.12"
        />
        <Animated
        className="flying-cloud"
        src="./cloud.png"
        ratioX="0.25"
        ratioY="0.52"
        />
        <Animated
        className="flying-cloud"
        src="./cloud.png"
        ratioX="0.15"
        ratioY="0.22"
        />
        <Animated
        className="flying-cloud"
        src="./cloud.png"
        ratioX="0.15"
        ratioY="0.12"
        />
        <Animated
        className="flying-cloud"
        src="./cloud.png"
        ratioX="0.25"
        ratioY="0.12"
        />
        <Animated
        className="flying-cloud"
        src="./cloud.png"
        ratioX="0.5"
        ratioY="0.1"
        />
        <Animated
        className="flying-cat"
        src="./cat.png"
        ratioX="0.35"
        ratioY="0.32"
        />
      </header>
    </div>
  );
}

export default App;
