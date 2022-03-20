import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Slider from "../Slider/Slider";
import { IconFactory } from "../../factories/IconFactory";

export default function MainSlider() {
  return (
    <Card sx={{ minWidth: 345, minHeight: 540 }}>
      <CardHeader
        avatar={<IconFactory icon="Departamento" />}
        title="Ejemplo propiedad"
        subheader="100$$"
      />
      <Slider />

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
