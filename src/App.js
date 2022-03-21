import "./App.css";
import TopBar from "./components/TopBar/TopBar";
import BuildingDetail from "./pages/BuildingDetail/BuildingDetail";
import Home from "./pages/Home/Home";
import SignUpSecond from "./pages/SignUp/SignUpSecond";
import SignUp from "./pages/SignUp/SignUp";
import ChatFeed from "./pages/Chat/ChatFeed";
import ListApartmentBuilding from "./pages/ListApartmentBuilding/ListApartmentBuilding";
import MyProperties from "./pages/MyProperties/MyProperties";
import ConfirmIdentity from "./pages/ConfirmIdentity/ConfirmIdentity";
import MyProfileInquilino from "./pages/MyProfileInquilino/MyProfileInquilino";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="signup" element={<SignUp />} />
        <Route path="signupconfirmation" element={<SignUpSecond />} />
        <Route path="buildingdetail" element={<BuildingDetail />} />
        <Route path="chat" element={<ChatFeed />} />
        <Route
          path="listapartmentbuilding"
          element={<ListApartmentBuilding />}
        />
        <Route path="myproperties" element={<MyProperties />} />
        <Route path="confirmidentity" element={<ConfirmIdentity />} />
        <Route path="myprofileinquilino" element={<MyProfileInquilino />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
