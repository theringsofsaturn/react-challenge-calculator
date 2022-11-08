import './App.css';
import Description from './components/Description/Description';
import MyNavbar from './components/Navbar/MyNavbar';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Description />
      <Main />
    </div>
  );
}

export default App;
