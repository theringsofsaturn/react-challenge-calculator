import MyNavbar from './components/Navbar/MyNavbar';
import Calculator from './components/Calculator/Calculator';
import Description from './components/Description/Description';
import './App.css';

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
