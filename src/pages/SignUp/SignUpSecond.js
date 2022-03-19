import { Button } from "@material-ui/core";
import InputWithIcon from "../../components/Input/Input";
import { IconFactory } from "../../factories/IconFactory";
import {
  MainLayout,
  MainTitle,
  FormWrapper,
  RightElement,
} from "./signUp.styled";

export default function SignUpSecond() {
  return (
    <MainLayout>
      <MainTitle>REGISTRATE!</MainTitle>
      <FormWrapper>
        <InputWithIcon label="Email" />
        <InputWithIcon label="Contrasenia" />
        <InputWithIcon label="Contrasenia" />
      </FormWrapper>
      <RightElement>
        <Button variant="contained">Confirmar</Button>
      </RightElement>
    </MainLayout>
  );
}
