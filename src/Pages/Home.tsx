import { Box, Link } from "@mui/material";

const Home = () => {
  return (
    <Box>
      <Link href={"/sign-in"}>Sign In</Link>
      <Link href={"/sign-up"}>Sign Up</Link>
    </Box>
  );
};

export default Home;
