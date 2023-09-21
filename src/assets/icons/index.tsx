import { AiOutlinePlus } from "react-icons/ai";
import { PiPaperPlaneTilt } from "react-icons/pi";
import { IconContext } from "react-icons";

export const plusIcon = (
  <IconContext.Provider
    value={{ size: "20", style: { backgroundColor: "inherit" } }}
  >
    <AiOutlinePlus />
  </IconContext.Provider>
);

export const sendIcon = (
  <IconContext.Provider
    value={{ size: "20", style: { backgroundColor: "inherit" } }}
  >
    <PiPaperPlaneTilt />
  </IconContext.Provider>
);
