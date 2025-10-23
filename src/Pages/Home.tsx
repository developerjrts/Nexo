import { ChatBubble } from "@mui/icons-material";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
      }}
      className="w-full h-full flex  flex-col items-center justify-center"
    >
      <ChatBubble
        sx={{
          height: 50,
          width: 50,
        }}
      />
      <h1 className="text-3xl font-semibold mt-5">Welcome to Nexo!</h1>
      <h1 className="gray">
        Select contact to from the list to start conversation.
      </h1>
    </Box>
  );
};

export default Home;
