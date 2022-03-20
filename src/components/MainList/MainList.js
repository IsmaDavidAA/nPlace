import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Slider from "../Slider/Slider";
import { IconFactory } from "../../factories/IconFactory";
import { Avatar } from "@material-ui/core";

export default function MainList() {
  return (
    <Card sx={{ minWidth: 345, minHeight: 150 }}>
      <CardHeader
        avatar={
          <Avatar
            alt="Remy Sharp"
            src="https://listing.pamgolding.co.za/images/properties/201811/1122360/H/1122360_H_54.jpg"
            variant="square"
          />
        }
        title="Ejemplo propiedad"
        subheader="100$$"
      />
      <CardHeader
        avatar={
          <Avatar
            alt="Remy Sharp"
            src="https://listing.pamgolding.co.za/images/properties/201811/1122360/H/1122360_H_54.jpg"
            variant="square"
          />
        }
        title="Ejemplo propiedad"
        subheader="100$$"
      />
    </Card>
  );
}
