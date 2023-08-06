import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { EnterButton } from "../muiStyle/NavbarStyle";
import { useState } from "react";
import { useCreateUserMutation } from "../features/apiSlice";
import { useNavigate } from "react-router";

const schema = yup.object().shape({
  email: yup.string().required("Email is required"),
  password: yup.string().required("password is required"),
});

const SignIn = () => {
  const [userData, setuserData] = useState();
  const [CreateUser] = useCreateUserMutation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formSubmit = (data) => {
    CreateUser(data)
      .unwrap()
      .then((res) => {
        if (res?.success === true) {
          reset();
          navigate("/products");
        }
        console.log(res, "ressss");
      });
    console.log(data, "dataa");
  };

  return (
    <Container maxWidth="xs">
      <form onSubmit={handleSubmit(formSubmit)}>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              //   required
              fullWidth
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              {...register("email")}
            />
            {errors.email ? (
              <p className="text-red-700">{errors.email?.message}</p>
            ) : (
              ""
            )}
            <TextField
              margin="normal"
              //   required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              {...register("password")}
            />
            {errors.password ? (
              <p className="text-red-700">{errors.password?.message}</p>
            ) : (
              ""
            )}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <EnterButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </EnterButton>
          </Box>
        </Box>
      </form>
    </Container>
  );
};

export default SignIn;
