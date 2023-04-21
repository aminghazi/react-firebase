import logo from './logo.svg';
import './App.css';
import './input.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Firebase
        </p>
        <h1 class="text-3xl font-bold underline">
          Hello world!
        </h1>
        <form className='bg-slate-200'>
          <input />
        </form>
      </header>
    </div>
  );
}

export default App;
