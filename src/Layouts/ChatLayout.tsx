import Nav from "@/Components/Nav";
import Sidebar from "@/Components/Sidebar";
import { Box } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";

const ChatLayout = () => {
  const location = useLocation();

  const isHide = location.pathname.startsWith("/inbox");

  return (
    <Box className="flex w-screen h-screen overflow-hidden">
      <Sidebar />

      <Box className="flex flex-col flex-1 h-full">
        {!isHide && <Nav />}
        <Box className="flex-1 overflow-y-auto bg-gray-900">
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default ChatLayout;
