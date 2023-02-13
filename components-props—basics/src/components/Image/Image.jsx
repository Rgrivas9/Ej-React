
const Image = ({image}) => {
  return (
    <img
      src={image.src}
      alt={image.alt}
      className="imageReact"
    />
  );
};
export default Image