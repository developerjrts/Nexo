import ChatHeader from "@/Components/ChatHeader";
import MessageContainer from "@/Components/MessageContainer";
import TextField from "@/Components/TextField";
import { SendRounded } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";

const ChatPage = () => {
  return (
    <Box className="h-screen">
      <ChatHeader />
      <MessageContainer />
      <Box className="absolute h-[10%] border-t-gray-700 border-t bg-[#1e2939] items-center justify-center w-full md:w-[75%] flex gap-4 p-4 py-10 md:p-6 bottom-0">
        <TextField placeholder="Enter message" />
        <IconButton>
          <SendRounded />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ChatPage;
