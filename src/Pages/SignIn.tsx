import { Box, Card, Typography, Button } from "@mui/material";
import axios, { isAxiosError } from "axios";

import TextField from "@/Components/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { url } from "@/constant";

const SignIn = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignIn = async () => {
    try {
      console.log("calling api");

      const response = await axios.post(
        `${url}/auth/sign-in`,
        {
          username,
          password,
        },
        {
          withCredentials: true,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
      if (isAxiosError(error)) {
        const errMessage = error.response?.data.message;
        alert(errMessage);
      }
    }
  };

  return (
    <Box className="min-h-screen w-screen py-10 md:py-0 items-center px-4 md:px-0 justify-center flex-col flex">
      <Typography
        sx={{
          color: "#007bff",
          fontWeight: 600,
          fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
        }}
      >
        Nexo
      </Typography>

      <Typography
        sx={{
          fontWeight: 700,
          fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" },
        }}
      >
        SignIn to your account
      </Typography>

      <Typography
        sx={{
          color: "gray",
        }}
      >
        Welcome Back!
      </Typography>
      <Card
        className="p-4 flex w-full md:w-[350px] mt-6 flex-col gap-4"
        sx={{
          background: "#1e2939 ",
        }}
      >
        {/* username */}
        <TextField
          value={username}
          setValue={setUsername}
          placeholder="Choose username"
          label="Username"
        />

        {/* password */}
        <TextField
          value={password}
          setValue={setPassword}
          placeholder="Create password"
          label="Password"
          type="password"
        />
        <Button onClick={handleSignIn} variant="contained">
          Sign In
        </Button>
        <Typography textAlign={"center"}>OR</Typography>
        <Button variant="text" onClick={() => navigate("/sign-up")}>
          Sign Up
        </Button>
      </Card>
    </Box>
  );
};

export default SignIn;
