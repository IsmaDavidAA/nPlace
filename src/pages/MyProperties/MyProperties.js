import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import React from "react";
import ApartmentList from "../../components/ApartmentList/ApartmentList";
import MainList from "../../components/MainList/MainList";
import MainSlider from "../../components/MainSlider/MainSlider";
import Slider from "../../components/Slider/Slider";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  HeaderContainer,
  LeftContainer,
  MainImage,
  MainLayout,
  RightElement,
} from "./MyProperties.styled";
import { Add, FormatAlignJustify } from "@mui/icons-material";

export default function MyProperties() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <MainLayout>
      <HeaderContainer>
        <MainImage src="https://th.bing.com/th/id/OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA?w=170&h=180&c=7&r=0&o=5&pid=1.7" />
        <LeftContainer>
          <Typography variant="h4" component="h2">
            Detalles
          </Typography>
          <Typography variant="h5" component="h3">
            ......
          </Typography>
        </LeftContainer>
      </HeaderContainer>
      <Divider />
      <Typography variant="h6" component="h3">
        Mis propiedades
      </Typography>
      <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: "background.paper" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
        >
          <Tab label="Grupo 1" />
          <Tab label="Grupo 2" />
          <Tab label="Grupo 3" />
          <Tab label="Grupo 4" />
        </Tabs>
      </Box>
      <Divider />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>San Julian</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ApartmentList />
        </AccordionDetails>
        <RightElement>
          <Button variant="outlined" startIcon={<Add />}>
            Agregar departamento
          </Button>
        </RightElement>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Bella vista</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ApartmentList />
        </AccordionDetails>
        <RightElement>
          <Button variant="outlined" startIcon={<Add />}>
            Agregar departamento
          </Button>
        </RightElement>
      </Accordion>
      <RightElement>
        <Button variant="outlined" startIcon={<Add />}>
          Agregar propiedad
        </Button>
      </RightElement>
    </MainLayout>
  );
}
