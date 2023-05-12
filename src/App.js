import './App.css';
import AnalogClock from './Components/AnalogClock';
import DigitalCLock from './Components/DigitalClock';

function App() {
  return (
    <div className="App flex max-md:flex-col">
      <DigitalCLock className="w-2/4"/>
      <AnalogClock className="w-2/4"/>
    </div>
  );
}

export default App;