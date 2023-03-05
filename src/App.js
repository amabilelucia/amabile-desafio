import "./App.css";
import Graphic from "./components/graphic";
import Header from "./components/header";
import Map from "./components/map";
import Table from "./components/table";
import { Get } from "./controller/InoviaController";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./components/create";
import Put from "./components/put";

function App() {
  return (
    <div className="App">
      <div className="page">
        <BrowserRouter>
          <Routes>
            <Route element={<Table objectList={Get()} />} path="/" />
            <Route element={<Graphic objectList={Get()}/>} path="/graphic" />
            <Route element={<Map objectList={Get()}/>} path="/map" />
            <Route element={<Create></Create>} path="/create" />
            <Route element={<Put></Put>} path="/put" />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
