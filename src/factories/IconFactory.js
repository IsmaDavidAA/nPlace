import * as React from "react";
import {
  AccountCircle,
  Password,
  Email,
  Phone,
  BrandingWatermark,
  NavigateNext,
} from "@mui/icons-material";

export const IconFactory = ({ icon, sx }) => {
  switch (icon) {
    case "Contrasenia":
      return <Password sx={sx} />;
    case "Email":
      return <Email sx={sx} />;
    case "Nombres":
      return <AccountCircle sx={sx} />;
    case "Apellidos":
      return <AccountCircle sx={sx} />;
    case "Telefono":
      return <Phone sx={sx} />;
    case "ID":
      return <BrandingWatermark sx={sx} />;
    case "Continuar":
      return <NavigateNext sx={sx} />;
    default:
      return <Phone sx={sx} />;
  }
};
