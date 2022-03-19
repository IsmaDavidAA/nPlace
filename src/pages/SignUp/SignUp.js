import { Button } from "@material-ui/core";
import InputWithIcon from "../../components/Input/Input";
import { IconFactory } from "../../factories/IconFactory";
import {
  MainLayout,
  MainTitle,
  FormWrapper,
  RightElement,
} from "./signUp.styled";

export default function SignUp() {
  return (
    <MainLayout>
      <MainTitle>REGISTRATE!</MainTitle>
      <FormWrapper>
        <InputWithIcon label="Nombres" />
        <InputWithIcon label="Apellidos" />
        <InputWithIcon label="ID" />
        <InputWithIcon label="Telefono" />
      </FormWrapper>
      <RightElement>
        <Button
          variant="contained"
          endIcon={<IconFactory icon={"Continuar"} />}
        >
          Continuar
        </Button>
      </RightElement>
    </MainLayout>
  );
}
