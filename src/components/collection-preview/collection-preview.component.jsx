import React from "react";
import { Link } from "react-router-dom";
import CollectionItem from "../collection-item/collection-item.components";

import "./collection-preview.styles.scss";

// these .filter and .map calls might cause a performance issue
const CollectionPreview = ({ title, items, routeName, match }) => (
  <div className="collection-preview">
    <h2 className="title">
      <Link to={`${match.path}/${routeName}`}>{title}</Link>
    </h2>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
