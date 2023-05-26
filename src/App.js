import SearchBarlist from "./components/SearchBarlist";
import searchImages from "./api";
import { useState } from "react";
import ImageList from "./components/ImageList";

function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const data = await searchImages(term);
    setImages(data);
  };
  return (
    <>
      <SearchBarlist onSubmit={handleSubmit} />
      <ImageList finalData={images}></ImageList>
    </>
  );
}

export default App;
