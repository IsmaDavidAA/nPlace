import {
  Avatar,
  Button,
  Card,
  Container,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import ApartmentList from "../../components/ApartmentList/ApartmentList";
import MainList from "../../components/MainList/MainList";
import MainSlider from "../../components/MainSlider/MainSlider";
import Slider from "../../components/Slider/Slider";
import {
  CenterContainer,
  DetailContainer,
  HeaderContainer,
  LeftContainer,
  MainImage,
  MainLayout,
} from "./ListApartmentBuilding.styled.js";

export default function BuildingDetail() {
  return (
    <MainLayout>
      <HeaderContainer>
        <MainImage src="https://th.bing.com/th/id/OIP.0t0C3YEjWXw_toirRCPj3gHaFj?w=200&h=180&c=7&r=0&o=5&pid=1.7" />
        <LeftContainer>
          <Typography variant="h4" component="h2">
            Edificio Buena aventura
          </Typography>
        </LeftContainer>
      </HeaderContainer>
      <Divider />
      <CenterContainer>
        <Typography variant="h6" component="h3">
          Departamentos
        </Typography>
      </CenterContainer>
      <Divider />
      <ApartmentList />
    </MainLayout>
  );
}
