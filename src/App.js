import "./App.css";
import TopBar from "./components/TopBar/TopBar";
import BuildingDetail from "./pages/BuildingDetail/BuildingDetail";
import Home from "./pages/Home/Home";
import SignUpSecond from "./pages/SignUp/SignUpSecond";
import ChatFeed from "./pages/Chat/ChatFeed";
import ListApartmentBuilding from "./pages/ListApartmentBuilding/ListApartmentBuilding";
import MyProperties from "./pages/MyProperties/MyProperties";
import ConfirmIdentity from "./pages/ConfirmIdentity/ConfirmIdentity";
import MyProfileInquilino from "./pages/MyProfileInquilino/MyProfileInquilino";
function App() {
  return (
    <div>
      <TopBar />
      {/* <SignUp /> */}
      {/* <SignUpSecond /> */}
      {/* <Home /> */}
      {/* <BuildingDetail /> */}
      {/* <ChatFeed /> */}
      {/* <ListApartmentBuilding /> */}
      {/* <MyProperties /> */}
      {/* <ConfirmIdentity /> */}
      <MyProfileInquilino />
    </div>
  );
}

export default App;
