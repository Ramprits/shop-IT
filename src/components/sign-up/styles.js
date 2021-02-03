import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  tertiaryAction: {
    [theme.breakpoints.up("sm")]: {
      textAlign: "right",
    },
  },
  actions: {
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(3),
    },
  },
}));
