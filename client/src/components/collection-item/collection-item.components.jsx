import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import {
  StyledCollectionFooter,
  StyledCollectionImage,
  StyledCollectionItem,
  StyledCustomButton,
  StyledName,
  StyledPrice,
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;
  return (
    <StyledCollectionItem>
      <StyledCollectionImage imageUrl={imageUrl} />
      <StyledCollectionFooter>
        <StyledName>{name}</StyledName>
        <StyledPrice>${price}</StyledPrice>
      </StyledCollectionFooter>
      <StyledCustomButton inverted onClick={() => addItem(item)}>
        Add to Cart
      </StyledCustomButton>
    </StyledCollectionItem>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
