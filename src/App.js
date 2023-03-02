import './App.css';
import Graphic from './components/graphic';
import Map from './components/map';
import Table from './components/table';
import {Get} from './controller/InoviaController';

function App() {

  return (
    <div className="App">
      {/* <Table objectList={Get()}></Table> */}
      {/* <Graphic objectList={Get()}></Graphic> */}
      <Map></Map>
    </div>
  );
}

export default App;
