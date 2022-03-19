import React from "react";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import {
  SideBarContainer,
  SideBarList,
  SideBarListItem,
  SideBarMenu,
  SideBarTitle,
  SideBarWrapper,
} from "./SideBar.styled";
export default function SideBar() {
  return (
    <SideBarContainer>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarTitle>Dashboard</SideBarTitle>
          <SideBarList>
            {/* <Link to="/" className="link"> */}
            <SideBarListItem>
              <LineStyle className="sidebarIcon" />
              Home
            </SideBarListItem>
            {/* </Link> */}
            <SideBarListItem>
              <Timeline className="sidebarIcon" />
              Analytics
            </SideBarListItem>
            <SideBarListItem>
              <TrendingUp className="sidebarIcon" />
              Sales
            </SideBarListItem>
          </SideBarList>
        </SideBarMenu>

        <SideBarMenu>
          <SideBarTitle>Quick Menu</SideBarTitle>
          <SideBarList>
            {/* <Link to="/users" className="link"> */}
            <SideBarListItem>
              <PermIdentity className="sidebarIcon" />
              Users
            </SideBarListItem>
            {/* </Link> */}
            {/* <Link to="/products" className="link"> */}
            <SideBarListItem>
              <Storefront className="sidebarIcon" />
              Products
            </SideBarListItem>
            {/* </Link> */}
            <SideBarListItem>
              <AttachMoney className="sidebarIcon" />
              Transactions
            </SideBarListItem>
            <SideBarListItem>
              <BarChart className="sidebarIcon" />
              Reports
            </SideBarListItem>
          </SideBarList>
        </SideBarMenu>
        <SideBarMenu>
          <SideBarTitle>Notifications</SideBarTitle>
          <SideBarList>
            <SideBarListItem>
              <MailOutline className="sidebarIcon" />
              Mail
            </SideBarListItem>
            <SideBarListItem>
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </SideBarListItem>
            <SideBarListItem>
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </SideBarListItem>
          </SideBarList>
        </SideBarMenu>
        <SideBarMenu>
          <SideBarTitle>Staff</SideBarTitle>
          <SideBarList>
            <SideBarListItem>
              <WorkOutline className="sidebarIcon" />
              Manage
            </SideBarListItem>
            <SideBarListItem>
              <Timeline className="sidebarIcon" />
              Analytics
            </SideBarListItem>
            <SideBarListItem>
              <Report className="sidebarIcon" />
              Reports
            </SideBarListItem>
          </SideBarList>
        </SideBarMenu>
      </SideBarWrapper>
    </SideBarContainer>
  );
}
