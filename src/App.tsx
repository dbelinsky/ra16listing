import data from './etsy.json';
import './App.css';
import Listing from './components/Listing/Listing';

function App() {
  return (
    <>
      <Listing items={data} />
    </>
  );
}

export default App;
