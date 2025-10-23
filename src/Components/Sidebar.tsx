import { Box } from "@mui/material";
import ProfileCard from "./ProfileCard";

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: { md: "25vw", xs: "100vw" },
        backgroundColor: "#1f2937",
        boxShadow: "none",
      }}
    >
      <Box className="h-full w-full border-r border-r-gray-600 bg-gray-800 flex-col flex">
        <ProfileCard />
      </Box>
    </Box>
  );
};

export default Sidebar;
