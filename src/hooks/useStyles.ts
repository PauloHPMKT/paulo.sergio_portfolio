import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  containerCommands: {
    display: "flex",
    gap: 6,
  },
  link: {
    color: "#f7b93e",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  setCommands: {
    height: "10px",
    width: "10px",
    marginBottom: 20,
    borderRadius: "100%",
  },
  codeButton: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "transparent",
    color: "#2e1e00",
  },
  titleEffect: {
    marginTop: 0,
    width: "max-content",
    background: "linear-gradient(121.57deg, #a83947 20.77%, #f7b93e 90.15%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    textShadow: "0px 3px 3px rgba(0, 0, 0, 0.1)",
    WebkitTextFillColor: "transparent",
    lineHeight: 1.3
  },
  setSpacing: {
    margin: "40px 0",
    lineHeight: "1.5",
  },
})
