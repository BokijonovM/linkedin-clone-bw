import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Profile";

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{backgroundColor:'rgb(243,242,238)'}}></div>
      <a href="/profile">
        <h1>hefisgdisbdk</h1>
      </a>
      <Routes>
        <Route path="/" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
