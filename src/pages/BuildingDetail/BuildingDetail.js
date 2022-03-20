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
} from "./BuildingDetail.styled";

export default function BuildingDetail() {
  return (
    <MainLayout>
      <HeaderContainer>
        <MainImage src="https://i.pinimg.com/736x/22/5f/5d/225f5da6d53a79186d9047926880b68d.jpg" />
        <LeftContainer>
          <Typography variant="h4" component="h2">
            Building Name
          </Typography>
          <Typography variant="h5" component="h3">
            $1,000,000
          </Typography>
        </LeftContainer>
      </HeaderContainer>
      <Divider />
      <Typography variant="h6" component="h3">
        Description
      </Typography>
      <Typography variant="body1" component="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        eget nisl at ipsum tincidunt tincidunt. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia Curae;
      </Typography>
      <CenterContainer>
        <Button>Estoy interesado</Button>
      </CenterContainer>
      <Slider></Slider>
      <Divider />
      <DetailContainer>
        <Typography variant="h6" component="h3">
          Info General
        </Typography>
        <Typography variant="body1" component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eget nisl at ipsum tincidunt tincidunt. Vestibulum ante ipsum primis
          in faucibus orci luctus et ultrices posuere cubilia Curae;
        </Typography>
        <List>
          <ListItem alignItems="flex-end" dense={true}>
            <ListItemText primary="Direccion" secondary="Calle 123" />
          </ListItem>
          <ListItem alignItems="flex-start" dense={true}>
            <ListItemText
              primary="Tipo de propiedad"
              secondary="departamento"
            />
          </ListItem>
          <ListItem alignItems="flex-start" dense={true}>
            <ListItemText primary="Tipo de operacion" secondary="alquiler" />
          </ListItem>
          <ListItem alignItems="flex-start" dense={true}>
            <ListItemText primary="Area" secondary="200m2" />
          </ListItem>
          <ListItem alignItems="flex-start" dense={true}>
            <ListItemText primary="Cantidad de baños" secondary="1" />
          </ListItem>
          <ListItem alignItems="flex-start" dense={true}>
            <ListItemText primary="Cantidad de habitaciones" secondary="3" />
          </ListItem>
          <ListItem alignItems="flex-start" dense={true}>
            <ListItemText primary="Cantidad de cocheras" secondary="1" />
          </ListItem>
        </List>
      </DetailContainer>
    </MainLayout>
  );
}
