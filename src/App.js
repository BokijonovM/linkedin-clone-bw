import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import Sidebar from "./components/profile/Sidebar";
import { Col } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <div className="App"></div>
      <a href="/profile">
        <h1>hefisgdisbdk</h1>
      </a>
      <Col>
        <Sidebar />
      </Col>
      <Routes>
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
