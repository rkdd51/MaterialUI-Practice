import "./styles.css";
import Home from "./pages/Home";
import SearchAppBar from "./components/AppBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <SearchAppBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>

      <Home />
    </>
  );
}

export default App;
