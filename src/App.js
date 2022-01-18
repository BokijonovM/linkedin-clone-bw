import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Profile";

function App() {
  return (
    <BrowserRouter>
      <div className="App"></div>

      <Routes>
        <Route path="/" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
