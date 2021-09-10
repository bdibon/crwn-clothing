import React from "react";
import { withRouter } from "react-router-dom";
import {
  BackgroundImage,
  MenuItemContainer,
  StyledContent,
  StyledContentCTA,
  StyledContentTitle,
} from "./menu-item.styles";

function MenuItem({ title, imageUrl, size, linkUrl, history, match }) {
  return (
    <MenuItemContainer onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <BackgroundImage imageUrl={imageUrl} />
      <StyledContent>
        <StyledContentTitle>{title}</StyledContentTitle>
        <StyledContentCTA>SHOP NOW</StyledContentCTA>
      </StyledContent>
    </MenuItemContainer>
  );
}

export default withRouter(MenuItem);
