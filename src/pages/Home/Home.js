import {
  Avatar,
  Container,
  Divider,
  IconButton,
  Typography,
} from "@material-ui/core";
import ApartmentList from "../../components/ApartmentList/ApartmentList";
import MainList from "../../components/MainList/MainList";
import MainSlider from "../../components/MainSlider/MainSlider";
import { MainLayout } from "./Home.styled";
import FilterListIcon from "@mui/icons-material/FilterList";
import { RightElement } from ".//Home.styled";
export default function Home() {
  return (
    <MainLayout>
      <Typography>En [Ciudad]</Typography>
      <Divider />
      <MainSlider />
      <Divider />
      <Typography>En [Zona]</Typography>
      <Divider />
      <MainList />
      <Divider />
      <RightElement>
        <IconButton aria-label="filter">
          <FilterListIcon />
        </IconButton>
      </RightElement>
      <ApartmentList />
    </MainLayout>
  );
}
