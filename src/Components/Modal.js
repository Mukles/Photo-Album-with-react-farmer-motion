import { motion } from "framer-motion";
import { images } from "./data/data";

const buttonVeriant = {
  hidden: {
    opacity: 0,
    y: -200,
  },
  show: {
    opacity: 1,
    y: 0,
  },
  transition: { type: "spring", stiffness: 80, damping: 10, dealy: 0.8 },
  hover: {},
};

const Modal = ({ layoutId, popUp }) => {
  const selectedImage = images.find((image) => image.id === layoutId);
  return (
    <div className="modal">
      <motion.button
        variants={buttonVeriant}
        initial="hidden"
        animate="show"
        exit={{ opacity: 0, y: -200 }}
        className="icon"
        whileHover={{ rotate: 180 }}
        onClick={() => popUp(selectedImage.id)}
      >
        <motion.i
          whileHover={{ animation: { scale: 1.2 } }}
          className="fa-solid fa-xmark"
        ></motion.i>
      </motion.button>
      <div className="modal-image">
        <motion.img
          src={`${selectedImage.image}`}
          layoutId={selectedImage.id}
          alt=""
        />
      </div>
    </div>
  );
};

export default Modal;
