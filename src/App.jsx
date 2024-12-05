import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Order from "./components/Order";
import Search from "./components/Search";
import Home from "./components/Home";
import "./app.css";
import "./media.css"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/order/:id" element={<Order />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
