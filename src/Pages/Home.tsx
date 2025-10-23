import Nav from "@/Components/Nav";
import Sidebar from "@/Components/Sidebar";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box className="flex w-screen h-screen">
      <Sidebar />
      <Box>
        <Nav />
      </Box>
    </Box>
  );
};

export default Home;
