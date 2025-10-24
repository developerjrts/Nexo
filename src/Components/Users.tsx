import UserCard from "@/Components/UserCard";
import { url } from "@/constant";
import type { user } from "@/types/types";
import { Box, CircularProgress } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState<user[]>([]);

  const [loading, setLoading] = useState<Boolean>();

  const getUsers = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("session_code");
      const response = await axios.get(`${url}/user/get/all-users`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response.data);
      setUsers(response.data.users);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (loading) {
    return (
      <Box className="w-full h-full flex items-center justify-center">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box className="p-4">
      {users.map((user, i) => (
        <UserCard user={user} key={i} />
      ))}
    </Box>
  );
};

export default Users;
