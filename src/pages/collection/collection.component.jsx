import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.components";
import { selectCollection } from "../../redux/shop/shop.selector";

import "./collection.styles.scss";

const CollectionPage = ({ collection: { title, items } }) => (
  <div className="collection-page">
    <h2 className="title">{title}</h2>
    <div className="items">
      {items.map(item => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  </div>
);

const mapStateToProps = (state, { match }) => ({
  collection: selectCollection(match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
