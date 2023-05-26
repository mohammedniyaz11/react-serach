import React from "react";
import ImageShow from "../components/ImageShow";
import "./ImageList.css";
function ImageList({ finalData }) {
  const renderedImages = finalData.map((image) => {
    return <ImageShow image={image} key={image.id}></ImageShow>;
  });

  return <div className="image-list">{renderedImages}</div>;
}

export default ImageList;
