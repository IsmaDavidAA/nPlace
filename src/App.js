import "./App.css";
import TopBar from "./components/TopBar/TopBar";
import BuildingDetail from "./pages/BuildingDetail/BuildingDetail";
import Home from "./pages/Home/Home";
import SignUpSecond from "./pages/SignUp/SignUpSecond";
import ChatFeed from "./pages/Chat/ChatFeed";
function App() {
  return (
    <div>
      <TopBar />
      {/* <SignUp /> */}
      {/* <SignUpSecond /> */}
      {/* <Home /> */}
      {/* <BuildingDetail /> */}
      <ChatFeed />
    </div>
  );
}

export default App;
