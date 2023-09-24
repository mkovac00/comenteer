import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import { PiPaperPlaneTilt } from "react-icons/pi";
import { IconContext } from "react-icons";
import { FiLogIn } from "react-icons/fi";

import { motion } from "framer-motion";

export const plusIcon = (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1, rotate: 90 }}
    exit={{ scale: 0 }}
    transition={{ ease: "easeInOut", duration: 0.5 }}
    style={{ backgroundColor: "inherit", width: "20px", height: "20px" }}
  >
    <IconContext.Provider
      value={{ size: "20", style: { backgroundColor: "inherit" } }}
    >
      <AiOutlinePlus />
    </IconContext.Provider>
  </motion.div>
);

export const sendIcon = (
  <IconContext.Provider
    value={{ size: "20", style: { backgroundColor: "inherit" } }}
  >
    <PiPaperPlaneTilt />
  </IconContext.Provider>
);

export const closeIcon = (
  <IconContext.Provider
    value={{ size: "20", style: { backgroundColor: "inherit" } }}
  >
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1, rotate: 90 }}
      exit={{ scale: 0 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      style={{ backgroundColor: "inherit", width: "20px", height: "20px" }}
    >
      <AiOutlineClose />
    </motion.div>
  </IconContext.Provider>
);

export const loginIcon = (
  <IconContext.Provider
    value={{ size: "20", style: { backgroundColor: "inherit" } }}
  >
    <FiLogIn />
  </IconContext.Provider>
);
