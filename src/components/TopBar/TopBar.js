import React from "react";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import {
  Logo,
  TopAvatar,
  TopBarContainer,
  TopBarIconContainer,
  TopBarWrapper,
  TopIconBadge,
  TopRight,
} from "./TopBar.styled";
import SearchField from "../SearchField/SearchField";
export default function TopBar() {
  return (
    <TopBarContainer>
      <TopBarWrapper>
        <div>
          <Logo>Stal</Logo>
        </div>
        <SearchField />
        <TopRight>
          <TopBarIconContainer>
            <NotificationsNone />
            <TopIconBadge>2</TopIconBadge>
          </TopBarIconContainer>
          <TopBarIconContainer>
            <Language />
            <TopIconBadge>2</TopIconBadge>
          </TopBarIconContainer>
          <TopBarIconContainer>
            <Settings />
          </TopBarIconContainer>
          <TopAvatar
            src="https://th.bing.com/th/id/OIP.USP1T_5fjD1VcqeFBkbNDwHaHa?w=165&h=180&c=7&r=0&o=5&pid=1.7"
            alt=""
          />
        </TopRight>
      </TopBarWrapper>
    </TopBarContainer>
  );
}
