import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Caterers from "./pages/Caterers";
import CreateCaterer from "./pages/CreateCaterer";
import CatererDetails from "./pages/CatererDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/caterers" />} />

        <Route path="/caterers" element={<Caterers />} />

        <Route path="/caterers/:id" element={<CatererDetails />} />

        <Route path="/create" element={<CreateCaterer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
