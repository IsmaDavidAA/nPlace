import { Button, Divider, Typography } from "@material-ui/core";
import { Label } from "@material-ui/icons";
import InputWithIcon from "../../components/Input/Input";
import { IconFactory } from "../../factories/IconFactory";
import {
  MainLayout,
  MainTitle,
  FormWrapper,
  RightElement,
  DataWrapper,
} from "./ConfirmIdentity.styled";

export default function ConfirmIdentity() {
  return (
    <MainLayout>
      <MainTitle>Verifica la identidad del inquilino</MainTitle>
      <Divider />
      <FormWrapper>
        <InputWithIcon label="ID" />
        <InputWithIcon label="Nombres" />
        <InputWithIcon label="Apellidos" />
        <InputWithIcon label="Telefono" />
      </FormWrapper>
      <RightElement>
        <Button
          variant="contained"
          endIcon={<IconFactory icon={"Continuar"} />}
        >
          Confirmar
        </Button>
      </RightElement>
    </MainLayout>
  );
}
