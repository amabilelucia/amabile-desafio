import './App.css';
import Graphic from './components/graphic';
import Table from './components/table';
import {Get} from './controller/InoviaController';

function App() {

  return (
    <div className="App">
      {/* <Table objectList={Get()}></Table> */}
      <Graphic></Graphic>
    </div>
  );
}

export default App;
