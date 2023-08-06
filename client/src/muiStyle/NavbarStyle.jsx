import { styled } from "@mui/system";
import { Button } from "@mui/material";

export const EnterButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  backgroundColor: "red",
  // marginTop: "6px",
  fontWeight: "600px",
  fontSize: "16px",
  borderRadius: "4px",
  fontFamily: "Source Sans Pro",

  fontStyle: "normal",
  lineHeight: "24px",
  boxShadow: "none",
  // width: "143px",
  color: "#FFFFFF",
  // width: 'auto',
  "&.MuiButtonBase-root": {
    padding: "10px 80px",
    height: "42px",
  backgroundColor: "black",

  },

  textalign: "center",

  [theme.breakpoints.down("570")]: {
    width: "100%",
  },

  "&:hover": {
    backgroundColor: "red",
    boxShadow: "none",
  },
  "&:focus": {
    backgroundColor: "#266E20",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#266E20",
  },
}));
