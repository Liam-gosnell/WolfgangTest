import './App.css';
import Header from './Header';
import Content from './Content';
import Awards from './Awards';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
        <Content />
        <Awards />
    </div>
  );
}

export default App;
