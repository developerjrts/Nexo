import { Box } from "@mui/material";
import ProfileCard from "./ProfileCard";
import Users from "@/Components/Users";

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: { md: "25%", xs: "100%" },
        backgroundColor: "#1f2937",
        display: { xs: "none", md: "block" },
      }}
      className="h-full flex flex-col border-r border-gray-700"
    >
      <ProfileCard />
      <Users />
    </Box>
  );
};

export default Sidebar;
