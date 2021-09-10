import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const StyledCustomButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
  }
`;

export const StyledCollectionItem = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    .image {
      opacity: 0.8;
    }

    ${StyledCustomButton} {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    width: 40vw;

    &:hover {
      .image {
        opacity: unset;
      }

      ${StyledCustomButton} {
        opacity: unset;
        display: flex;
      }
    }
  }
`;

export const StyledCollectionImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;

  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const StyledCollectionFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const StyledName = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const StyledPrice = styled.span`
  width: 10%;
`;
