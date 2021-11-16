import './App.css';
import Header from './Header';
import Content from './Content';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div className="content__body">
        <Content />
      </div>
    </div>
  );
}

export default App;
