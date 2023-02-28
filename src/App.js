import './App.css';
import Table from './components/table';
import {Get, GetRequestHooks} from './controller/InoviaController'

function App() {
  console.log(
  Get())
  return (
    <div className="App">
      <Table></Table>
    </div>
  );
}

export default App;
