import React, { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
  Container,
  CssBaseline,
  Avatar,
  Grid,
  TextField,
  Box,
  Snackbar,
  Button,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const RegisterPage = () => {

const { register, handleSubmit, reset } = useForm();
  
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const onSubmit = (data) => {
    axios
      .post("http://localhost:4000/api/auth/register", data)
      .then((resp) => {
        //    let response = resp.data
        setOpen(true);
        reset(resp)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log("OnInit");
  }, []);

  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    }
  }));

  const classes = useStyles();

  return (
    <Fragment>
      {/* <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="name" name="name" ref={register} />
          <input type="email" placeholder="email" name="email" ref={register} />
          <input
            type="password"
            placeholder="pasword"
            name="password"
            ref={register({
              required: "Please enter your password",
              minLength: {
                value: 12,
                message: "Password must more than 12 character",
              },
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
          <input type="submit" />
        </form> */}

      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        message="Registration Success, Please Login to Continue"
      />

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}></Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="name"
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  inputRef={register}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  inputRef={register}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  inputRef={register}
                />
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link color="inherit" to="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}></Box>
      </Container>
    </Fragment>
  );
};

export default RegisterPage;
