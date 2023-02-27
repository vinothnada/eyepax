import './App.css';
import Carousal from './components/Carousal'

function App() {

  const slides = 5
  const infinite = true
  
  return (
    <Carousal slides={slides} infinite={infinite}/>
  );
}

export default App;
