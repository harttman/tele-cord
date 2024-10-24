import "./global.css";
import Header from "./components/Header/Header";
import NavBar from "./components/Nav/NavBar";
import Profile from "./components/Content/Profile";

function App() {
  return (
    <div className="app_wrapper">
      <Header />
      <NavBar />
      <Profile />
    </div>
  );
}

export default App;
