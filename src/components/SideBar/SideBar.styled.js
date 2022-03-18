import styled from "@emotion/styled";

export const SideBarContainer = styled.div`
  flex: 1;
  height: calc(100vh - 50px);
  background-color: rgb(251, 251, 255);
  position: sticky;
  top: 50px;
`;

export const SideBarTitle = styled.h3`
  font-size: 13px;
  color: rgb(187, 186, 186);
`;
export const SideBarList = styled.ul`
  list-style: none;
  padding: 5px;
`;

export const SideBarWrapper = styled.div`
  padding: 20px;
  color: #555;
`;

export const SideBarMenu = styled.div`
  margin-bottom: 10px;
`;

export const SideBarIcon = styled.div`
  margin-right: 5px;
  font-size: 20px !important;
`;

export const SideBarListItem = styled.div`
  & {
    padding: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 10px;
  }
  &,
  &:hover {
    background-color: rgb(240, 240, 255);
  }
`;
