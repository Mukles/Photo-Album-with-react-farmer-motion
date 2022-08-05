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
        <motion.div
          className="grid-img"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ delay: 4, duration: 0.5 }}
        >
          {images.map((img, idx) => (
            <div className="image" key={idx} onClick={() => popUp(img.id)}>
              <motion.img layoutId={img.id} src={img.image} alt="" />
              <div className="content">
                <h2>Pacific Hotel</h2>
                <p>Cox's bazar, Chittagong</p>
              </div>
            </div>
          ))}
        </motion.div>
        <AnimatePresence exitBeforeEnter>
          {isModalOpen && <Modal popUp={popUp} layoutId={layoutId} />}
        </AnimatePresence>
      </AnimateSharedLayout>
    </div>
  );
};

export default Gallery;
