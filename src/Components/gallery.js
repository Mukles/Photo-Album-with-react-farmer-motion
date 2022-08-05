import Image from "./Image";

const Gallery = () => {
  return (
    <div className="grid-img">
      {Array(7)
        .fill("")
        .map((img, idx) => (
          <Image img={`/image/img${idx + 1}.jpg`} />
        ))}
    </div>
  );
};

export default Gallery;
