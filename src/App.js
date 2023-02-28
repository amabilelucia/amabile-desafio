import './App.css';
import Table from './components/table';
import {Get} from './controller/InoviaController'

function App() {

  return (
    <div className="App">
      <Table objectList={Get()}></Table>
    </div>
  );
}

export default App;
