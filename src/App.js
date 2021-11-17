import './App.css';
import Header from './Header';
import Content from './Content';
import Awards from './Awards';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
        <Content />
        <Awards />
        <Footer />
    </div>
  );
}

export default App;
