import { Warehouse } from "./modules/Warehouses";
import { Map } from "./modules/Map";
import { Route, Routes } from "react-router-dom";
import { History } from "./modules/History/History";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Map />} />
        <Route path="/history" element={<History />} />
        <Route path="/history/:id" element={<History />} />
        <Route path="/point/:id" element={<Warehouse />} />
      </Routes>
    </div>
  );
}

export default App;
