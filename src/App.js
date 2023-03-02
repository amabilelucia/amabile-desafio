import './App.css';
import Graphic from './components/graphic';
import Table from './components/table';
import {Get} from './controller/InoviaController';

function App() {

  return (
    <div className="App">
      {/* <Table objectList={Get()}></Table> */}
      <Graphic objectList={Get()}></Graphic>
    </div>
  );
}

export default App;
