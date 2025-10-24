import type { user } from "@/types/types";
import { Avatar, Box, Link } from "@mui/material";
import { useEffect, useState } from "react";

const ProfileCard = () => {
  const [user, setUser] = useState<user | null>(null);

  const getUser = async () => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const parsedUser: user = JSON.parse(storedUser);
        setUser(parsedUser);
      }
    } catch (error) {
      console.log("Error fetching user:", error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Link
      href={`/${user?.username}`}
      className="flex gap-4 border-b border-b-gray-600 items-center p-2"
      underline="hover"
    >
      <Avatar src={user?.profilePic} />
      <Box className="flex flex-col">
        <p className="font-medium text-lg">{user?.name}</p>
        <p className="font-normal text-md">{user?.username}</p>
      </Box>
    </Link>
  );
};

export default ProfileCard;
