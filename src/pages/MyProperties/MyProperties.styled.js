import styled from "@emotion/styled";
import { AccordionSummary } from "@material-ui/core";
import {
  Password,
  Email,
  Phone,
  BrandingWatermark,
  Badge,
} from "@mui/icons-material";
import Accordion from "@mui/material/Accordion";
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
  padding: 20px 0 0 0;
  width: 100%;
`;

export const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: flex-start;
`;

export const MainImage = styled.img`
  width: 25%;
  height: 100%;
  object-fit: cover;
  padding-right: 20px;
  object-position: center;
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 50px;
`;

export const MyAccordion = styled(Accordion)`
  width: 100%;
  align-items: center;
  padding: 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  &:focus {
    outline: none;
    border: 1px solid #555;
  }
`;

export const MyAccordionSummary = styled(AccordionSummary)`
  //   display: flex;
  //   flex-direction: row;
  //   align-items: center;
  //   justify-content: space-between;
`;
