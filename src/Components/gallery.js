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
    <div className="container" style={{ marginTop: "1rem" }}>
      <AnimateSharedLayout type="crossfade">
        <motion.div
          className="grid-img"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 1,
            duration: 0.5,
            type: "spring",
            damping: 15,
            stiffness: 120,
          }}
        >
          {images.map((img, idx) => (
            <div
              style={{ cursor: "pointer" }}
              className="image"
              key={idx}
              onClick={() => popUp(img.id)}
            >
              <motion.img
                layoutId={img.id}
                src={img.image}
                alt=""
                whileHover={{ scale: 1.2, transition: 1 }}
              />
              <div className="content">
                <h2>Pacific Hotel</h2>
                <p>Cox's bazar, Chittagong</p>
              </div>
              <div className="discount">20% OFF</div>
            </div>
          ))}
        </motion.div>
        <AnimatePresence key={"modal"}>
          {isModalOpen && <Modal popUp={popUp} layoutId={layoutId} />}
        </AnimatePresence>
      </AnimateSharedLayout>
    </div>
  );
};

export default Gallery;
