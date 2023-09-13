//Import route and our components
import { Route, Routes } from "react-router-dom";
import Currencies from "./assets/pages/Currencies";
import Main from "./assets/pages/Main";
import Price from "./assets/pages/Price";
import Nav from "./assets/components/Nav";

export default function App() {
  // We will use the Route component to specify each route
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/currencies" element={<Currencies />} />
        <Route path="/price/:symbol" element={<Price />} />
      </Routes>
    </div>
  );
}
