import {
  container,
  title,
  section,
  grayColor,
  whiteColor,
  mainRaised,
  hexToRgb,
} from "assets/jss/nextjs-material-kit-pro.js";

const descriptionStyle = {
  container,
  description: {
    color: grayColor[0],
    textAlign: "center",
  },
  section: {
    ...section,
    padding: "70px 0px",
    "& h4$description": {
      fontSize: "1.5em",
    },
  },
  features: {
    textAlign: "center !important",
    paddingTop: "30px",
    paddingBottom: "0px",
    "& p": {
      fontSize: "16px",
      lineHeight: "1.6em",
    },
  },
  proBadge: {
    position: "relative",
    fontSize: "22px",
    textTransform: "uppercase",
    fontWeight: "700",
    right: "-10px",
    padding: "10px 18px",
    top: "-30px",
    background: whiteColor,
    borderRadius: "3px",
    color: grayColor[18],
    lineHeight: "22px",
    boxShadow: "0 5px 5px -2px rgba(" + hexToRgb(grayColor[25]) + ",.4)",
  },
};

export default descriptionStyle;
