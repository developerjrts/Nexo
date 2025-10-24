import { Avatar, Box } from "@mui/material";

const ChatHeader = () => {
  return (
    <Box
      className="flex p-2 px-4 h-[10%] items-center gap-4"
      sx={{
        background: "#1e2939",
        boxShadow: "none",
        borderBottom: "1px solid #4a5565 ",
        width: "100%",
      }}
    >
      <Avatar />
      <Box>
        <h1 className="font-medium text-xl">Name</h1>
        <h1 className="font-normal text-md">username</h1>
      </Box>
    </Box>
  );
};

export default ChatHeader;
