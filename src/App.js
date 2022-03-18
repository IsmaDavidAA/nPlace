import "./App.css";
import TopBar from "./components/TopBar/TopBar";
import { Button } from "./components/Button/Button";
import SideBar from "./components/SideBar/SideBar";
function App() {
  return (
    <div>
      <TopBar />
      <div className="container">
        <SideBar />
      </div>
      <Button>BOTON</Button>
    </div>
  );
}

export default App;
