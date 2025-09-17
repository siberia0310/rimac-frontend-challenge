import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import PlansPage from "./pages/PlansPage";

import "./styles/global.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/plans" element={<PlansPage />} />
    </Routes>
  );
}

export default App;
