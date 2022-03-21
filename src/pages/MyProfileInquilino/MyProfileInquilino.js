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
import ReactStars from "react-rating-stars-component";
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
  ContainerLeftRight,
  HeaderContainer,
  LeftContainer,
  MainImage,
  MainLayout,
  RightElement,
} from "./MyProfileInquilino.styled";
import { Add, FormatAlignJustify } from "@mui/icons-material";

export default function MyProfileInquilino() {
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
            Renata
          </Typography>
          <ReactStars count={5} size={24} activeColor="#ffd700" />
        </LeftContainer>
      </HeaderContainer>
      <Divider />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <ContainerLeftRight>
            <Typography>Tus puntos</Typography>
            <Typography>232</Typography>
          </ContainerLeftRight>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem>
              <ContainerLeftRight>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
                <Divider />
                <Typography>100</Typography>
              </ContainerLeftRight>
            </ListItem>
            <ListItem>
              <ContainerLeftRight>
                <Typography>Lorem ipsum dolor sit amet</Typography>
                <Divider />
                <Typography>100</Typography>
              </ContainerLeftRight>
            </ListItem>
            <ListItem>
              <ContainerLeftRight>
                <Typography>Lorem ipsum dolor sit amet, consect</Typography>
                <Divider />
                <Typography>32</Typography>
              </ContainerLeftRight>
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Reglas del lugar</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem>
              <ListItemText>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
    </MainLayout>
  );
}
