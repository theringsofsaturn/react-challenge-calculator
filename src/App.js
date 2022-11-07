import './App.css';
import Description from './components/Description/Description';
import MyNavbar from './components/Navbar/MyNavbar';
import Calculator from './components/Calculator/Calculator';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Description />
      <Calculator />
    </div>
  );
}

export default App;
