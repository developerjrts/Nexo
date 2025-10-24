import ChatHeader from "@/Components/ChatHeader";
import MessageContainer from "@/Components/MessageContainer";
import TextField from "@/Components/TextField";
import { url } from "@/constant";
import type { user, message } from "@/types/types";
import { SendRounded } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ChatPage = () => {
  const { receiverId } = useParams();
  const [user, setUser] = useState<user | null>(null);

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<message[]>([]);

  const getMessages = async () => {
    try {
      console.log("message api");

      const token = localStorage.getItem("session_code");
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const parsedUser: user = JSON.parse(storedUser);
        setUser(parsedUser);
      }
      const response = await axios.get(
        `${url}/message/messages/${receiverId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);
      setMessages(response.data.messages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMessages();
  }, []);

  const sendMessage = async () => {
    try {
      const token = localStorage.getItem("session_code");
      const response = await axios.post(
        `${url}/message/send/${receiverId}`,
        {
          message,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage("");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box className="h-screen">
      <ChatHeader />
      <MessageContainer userId={user?._id} messages={messages} />
      <Box className=" h-[10%] border-t-gray-700 border-t bg-[#1e2939] items-center justify-center w-full flex gap-4 pt-2 md:p-6">
        <TextField
          setValue={setMessage}
          value={message}
          placeholder="Enter message"
        />
        <IconButton onClick={sendMessage}>
          <SendRounded />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ChatPage;
