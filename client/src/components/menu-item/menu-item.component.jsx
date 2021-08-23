import React from "react";
import { withRouter } from "react-router-dom";
import { BackgroundImage, MenuItemContainer } from "./menu-item.styles";

function MenuItem({ title, imageUrl, size, linkUrl, history, match }) {
  return (
    <MenuItemContainer onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <BackgroundImage imageUrl={imageUrl} />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </MenuItemContainer>
  );
}

export default withRouter(MenuItem);
