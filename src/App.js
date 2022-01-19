import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import { Col } from "react-bootstrap";
import MyMainFeed from "./components/feeds/MyMainFeed";
import OtherUser from "./OtherUser";
import PageError from "./PageError";

function App() {
  return (
    <BrowserRouter>
      <div className="App"></div>
      <Routes>
        <Route path="/" element={<MyMainFeed />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/OtherUser/:userId" element={<OtherUser />} />
        <Route path="*" element={<PageError />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
