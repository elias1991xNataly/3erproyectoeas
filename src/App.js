import './App.css';
import CountriesList from './components/CountriesList/CountriesList';
import NavBar from './components/Navbar/Navbar';



function App() {

  const countriesURL = "https://ih-countries-api.herokuapp.com/countries"
  return (
    <div className="App">
      <NavBar />
      <CountriesList url={countriesURL} />
    </div>
  );
}

export default App;
