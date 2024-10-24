import "./global.css";
import Header from "./components/Header/Header";
import NavBar from "./components/Nav/NavBar";
import Profile from "./components/Content/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app_wrapper">
      <Header />
      <NavBar />
      <div className="app-wrapper_content">
        <BrowserRouter>
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/dialogs" element={<Dialogs />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;