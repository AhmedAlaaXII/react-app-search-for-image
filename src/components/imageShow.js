export function ImageShow({ image, index }) {
  return (
    <div>
      <img src={image.urls.regular} alt="" key={index} />
    </div>
  );
}
