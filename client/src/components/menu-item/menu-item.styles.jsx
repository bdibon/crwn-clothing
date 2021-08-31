import styled, { css } from "styled-components";

const largeMenuItemStyles = css`
  height: 300px;
`;

export const MenuItemContainer = styled.div`
  align-items: center;
  background-position: center;
  background-size: cover;
  border: 1px solid black;
  display: flex;
  flex: 1 1 auto;
  height: 240px;
  justify-content: center;
  margin: 0 7.5px 15px;
  min-width: 30%;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & .content {
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
  }

  ${props => (props.size === "large" ? largeMenuItemStyles : null)}

  .content {
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: white;
    opacity: 0.7;
    position: absolute;

    .title {
      font-weight: bold;
      margin-bottom: 6px;
      font-size: 22px;
      color: #180606;
      text-transform: uppercase;
    }

    .subtitle {
      font-weight: lighter;
      font-size: 16px;
      text-transform: uppercase;
    }
  }
`;

export const BackgroundImage = styled.div`
  background-position: center;
  background-size: cover;
  height: 100%;
  width: 100%;

  &:hover {
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }

  ${props => css`
    background-image: url("${props.imageUrl}");
  `}
`;
