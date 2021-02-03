import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import useStyles from "./styles";
export default function Register(props) {
  const classes = useStyles();

  const content = {
    brand: { image: "mui-assets/img/logo-pied-piper.png", width: 40 },
    "02_header": "Create a new account",
    "02_primary-action": "Sign up",
    "02_secondary-action": "Do you have an account?",
    "02_tertiary-action": "Forgot password?",
    ...props.content,
  };

  let brand;

  if (content.brand.image) {
    brand = (
      <img
        src={content.brand.image}
        alt="logo"
        width={content.brand.width}
        height={content.brand.height}
      />
    );
  } else {
    brand = content.brand.text || "";
  }

  return (
    <section>
      <Container maxWidth="xs">
        <Box pt={8} pb={10}>
          <Box mb={3} textAlign="center">
            <Link href="#" variant="h4" color="inherit" underline="none">
              {brand}
            </Link>
            <Typography variant="h5" component="h2">
              {content["02_header"]}
            </Typography>
          </Box>
          <Box>
            <form noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="email"
                    id="email"
                    label="Email address"
                    autoComplete="email"
                  />
                </Grid>
              </Grid>
              <Box my={2}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  {content["02_primary-action"]}
                </Button>
              </Box>
              <Grid container spacing={2} className={classes.actions}>
                <Grid item xs={12} sm={6}>
                  <Link href="#" variant="body2">
                    {content["02_secondary-action"]}
                  </Link>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.tertiaryAction}>
                  <Link href="#" variant="body2">
                    {content["02_tertiary-action"]}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>
      </Container>
    </section>
  );
}
