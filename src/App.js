import "./styles/global.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";

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
