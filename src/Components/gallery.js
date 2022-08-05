import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { useState } from "react";
import { images } from "./data/data";
import Modal from "./Modal";

const Gallery = () => {
  const [isModalOpen, setModel] = useState(false);
  const [layoutId, setlayoutId] = useState(null);

  const popUp = (id) => {
    if (isModalOpen) {
      setModel(false);
      setlayoutId(null);
    } else {
      setModel(true);
      setlayoutId(id);
    }
  };

  return (
    <div className="container">
      <AnimateSharedLayout>
        <div className="grid-img">
          {images.map((img, idx) => (
            <div className="image" key={idx} onClick={() => popUp(img.id)}>
              <motion.img layoutId={img.id} src={img.image} alt="" />
            </div>
          ))}
        </div>
        <AnimatePresence>
          {isModalOpen && <Modal popUp={popUp} layoutId={layoutId} />}
        </AnimatePresence>
      </AnimateSharedLayout>
    </div>
  );
};

export default Gallery;
