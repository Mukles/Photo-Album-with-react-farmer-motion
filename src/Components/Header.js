import { motion } from "framer-motion";
const Header = () => {
  return (
    <motion.header
      className="header"
      style={{ marginBottom: "10px" }}
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, type: "spring", stiffness: 80, restDelta: 1 }}
    >
      <h1>My Photo Album</h1>
      <motion.span
        initial={{ width: 100, height: 5 }}
        animate={{ width: 200 }}
        transition={{
          type: "spring",
          stiffness: 80,
          width: { yoyo: Infinity, duration: 2 },
          delay: 2,
        }}
      ></motion.span>

      <div className="search">
        <input type={"search"} name="search" placeholder="search heare....." />
        <button className="search-btn">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
