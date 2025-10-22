import { Box, Card, Typography, Button } from "@mui/material";

import TextField from "@/Components/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios, { isAxiosError } from "axios";
import { url } from "@/constant";

const SignUp = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignUp = async () => {
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
    <Box className=" flex flex-col px-4 py-6 items-center justify-center min-h-screen">
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
        Create you account
      </Typography>

      <Typography
        sx={{
          color: "gray",
        }}
      >
        Join the conversation.
      </Typography>
      <Card
        className="p-4  flex w-full md:w-[350px] mt-6 flex-col gap-4"
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
        {/* name */}
        <TextField
          value={name}
          setValue={setName}
          placeholder="Enter your name"
          label="Name"
        />
        {/* email */}
        <TextField
          value={email}
          setValue={setEmail}
          placeholder="Enter your email"
          label="Email"
          type="email"
        />
        {/* email */}
        <TextField
          value={password}
          setValue={setPassword}
          placeholder="Create password"
          label="Password"
          type="password"
        />
        <Button onClick={handleSignUp} variant="contained">
          Sign Up
        </Button>
        <Typography textAlign={"center"}>OR</Typography>
        <Button variant="text" onClick={() => navigate("/sign-in")}>
          Sign In
        </Button>
      </Card>
    </Box>
  );
};

export default SignUp;
