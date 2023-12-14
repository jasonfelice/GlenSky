import './App.css';
import Splash from './components/splash/Splash';
import getCurrentDate from './utils/getCurrentDate';

function App() {
  return (
    <div className="App">
      <div className="rectangle">
        <span className='date'>{getCurrentDate()}</span>
        <main>
          <Splash/>
        </main>
      </div>
    </div>
  );
}

export default App;
