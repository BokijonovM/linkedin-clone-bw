import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import { useState } from "react";
import MyMainFeed from "./components/feeds/MyMainFeed";

function App() {
  // const [sideProfile, setsideProfile] = useState({}); //
  // const [userOnNav, setUserOnNav] = useState();
  // const [userPic, setUserPic] = useState();
  return (
    <BrowserRouter>
      <div className="App"></div>
      <Routes>
        <Route
          path="/"
          element={<MyMainFeed />} //userPic={userPic} userOnNav={userOnNav}
        />
        <Route
          path="/profile"
          element={
            <Profile
            // setUserPic={setUserPic}
            // setUserOnNav={setUserOnNav}
            // userPic={userPic}
            // userOnNav={userOnNav}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
