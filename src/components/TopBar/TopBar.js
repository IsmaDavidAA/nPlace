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
export default function TopBar() {
  return (
    <TopBarContainer>
      <TopBarWrapper>
        <div>
          <Logo>ISMA</Logo>
        </div>
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
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
        </TopRight>
      </TopBarWrapper>
    </TopBarContainer>
  );
}
