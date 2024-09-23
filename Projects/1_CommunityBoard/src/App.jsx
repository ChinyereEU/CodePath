import './App.css'
import CardList from './components/CardList';


const App = () => {
  return (
    <div className="App">
      <div className="TopImage">
        {/* <h1>DINING</h1>
        <h2>RESTAURANTS ON GEORGE STREET</h2> */}
        <CardList />
      </div>
    </div>
  );
}

export default App;
