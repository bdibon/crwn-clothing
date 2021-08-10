import React from "react";
import CollectionItem from "../collection-item/collection-item.components";

import "./collection-preview.styles.scss";

// these .filter and .map calls might cause a performance issue
const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...collectionItemProps }) => (
          <CollectionItem key={id} {...collectionItemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
