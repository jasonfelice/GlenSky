import './App.css';
import getCurrentDate from './utils/getCurrentDate';

function App() {
  return (
    <div className="App">
      <div className="rectangle">
        <span className='date'>{getCurrentDate()}</span>
      </div>
    </div>
  );
}

export default App;
