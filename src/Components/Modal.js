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
    <motion.div className="modal">
      <motion.button
        variants={buttonVeriant}
        initial="hidden"
        animate="show"
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
          layoutId={selectedImage.id}
          src={`${selectedImage.image}`}
          alt=""
        />
      </div>
    </motion.div>
  );
};

export default Modal;
