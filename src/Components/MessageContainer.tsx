import { useEffect, useRef } from "react";
import { Box, Typography, Avatar } from "@mui/material";
import type { message } from "@/types/types";

interface Props {
  messages: message[];
  userId?: string;
}

const MessageContainer = ({ messages, userId }: Props) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <Box
      ref={scrollRef}
      className="h-[80%] overflow-y-auto w-full p-3 flex flex-col gap-2"
      sx={{
        backgroundColor: "#0f172a",
        borderRadius: "12px",
      }}
    >
      {messages.length === 0 && (
        <Typography variant="body2" color="gray" className="text-center mt-10">
          No messages yet
        </Typography>
      )}

      {messages.map((msg, i) => {
        const isSentByCurrentUser = msg.senderId._id === userId;

        return (
          <Box
            key={i}
            className={`flex items-end gap-2 ${
              isSentByCurrentUser ? "justify-end" : "justify-start"
            }`}
          >
            {/* Receiver avatar */}
            {!isSentByCurrentUser && (
              <Avatar
                src={
                  msg.senderId && typeof msg.senderId !== "string"
                    ? msg.senderId.avatar
                    : undefined
                }
                alt="sender"
                sx={{ width: 30, height: 30 }}
              />
            )}

            {/* Message bubble */}
            <Box
              sx={{
                backgroundColor: isSentByCurrentUser
                  ? "#2563eb"
                  : "rgba(255,255,255,0.08)",
                color: isSentByCurrentUser ? "#fff" : "#e2e8f0",
                px: 2,
                py: 1,
                borderRadius: "14px",
                maxWidth: "70%",
                wordBreak: "break-word",
                boxShadow: "0 1px 2px rgba(0,0,0,0.2)",
              }}
            >
              <Typography variant="body2">{msg.message}</Typography>
              <Typography
                variant="caption"
                sx={{
                  display: "block",
                  textAlign: "right",
                  opacity: 0.7,
                  fontSize: "0.7rem",
                  mt: 0.3,
                }}
              >
                {msg.createdAt
                  ? new Date(msg.createdAt).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  : ""}
              </Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default MessageContainer;
