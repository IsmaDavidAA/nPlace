import styled from "@emotion/styled";
import {
  Password,
  Email,
  Phone,
  BrandingWatermark,
  Badge,
} from "@mui/icons-material";

export const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: sticky;
  top: 50px;
  padding: 20px;
  color: #555;
`;

export const MainTitle = styled.h3`
  text-align: center;
  background-color: #fff;
  color: rgb(187, 186, 186);
`;

// input to email
export const Input = styled.input`
  width: 250px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 0 10px;
  margin-bottom: 10px;
  font-size: 14px;
  color: #555;
  &:focus {
    outline: none;
    border: 1px solid #555;
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const RightElement = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 20px;
  width: 100%;
`;
