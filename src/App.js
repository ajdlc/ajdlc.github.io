import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1>This is the {name}</h1>
    </div>
  );
}

const name = "Home page";








export default App;
