import { SearchBar } from "./components/searchBar";
import { ImageList } from "./components/imageList";
import { Loading } from "./components/loading";
import searchImages from "./api";
import { useState } from "react";
import "./main.css";
export function App() {
  const [imgs, setImgs] = useState([]);
  const [page, setPage] = useState(1);
  const [term, setTerm] = useState(1);
  const onSubmit = async (term) => {
    const images = await searchImages(term, page);
    setImgs(images);
    setTerm(term);
    setPage(2);
  };
  const onClick = async (term) => {
    const images = await searchImages(term, page);
    setPage(page + 1);
    setImgs([...imgs, ...images]);
  };
  const isloading = () => {
    if (page > 1) {
      return <Loading onClick={onClick} term={term} />;
    } else {
      return <></>;
    }
  };
  return (
    <div>
      <div className="container">
        <SearchBar onSubmit={onSubmit} />
        <ImageList images={imgs} />
        <div>{isloading()}</div>
      </div>
    </div>
  );
}
