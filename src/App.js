import logo from './logo.svg';
import './App.css';

function App() {

  const host = window.location.host;
  const subdominio = host.split('.')[0]
  return (
    <div className="App">
      <header className="App-header">
        
          Subdominio: {subdominio}

      </header>
    </div>
  );
}

export default App;
