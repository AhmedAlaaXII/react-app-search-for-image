import "./ImageGrid.css";
import { ImageShow } from "./imageShow";
export function ImageList({ images }) {
  const imgsCol1 = [];
  const imgsCol2 = [];
  const imgsCol3 = [];
  for (let index = 0; index < images.length; index++) {
    if (index % 3 === 0) {
      imgsCol1.push(images[index]);
    } else if (index % 3 === 1) {
      imgsCol2.push(images[index]);
    } else if (index % 3 === 2) {
      imgsCol3.push(images[index]);
    }
  }
  const mappedImgs1 = imgsCol1.map((img, index) => {
    return <ImageShow image={img} index={index} />;
  });
  const mappedImgs2 = imgsCol2.map((img, index) => {
    return <ImageShow image={img} index={index} />;
  });
  const mappedImgs3 = imgsCol3.map((img, index) => {
    return <ImageShow image={img} index={index} />;
  });
  return (
    <div style={{ display: "block", margin: "10px auto" }}>
      <div className="row">
        <div className="column">{mappedImgs1}</div>
        <div className="column">{mappedImgs2}</div>
        <div className="column">{mappedImgs3}</div>
      </div>
    </div>
  );
}
