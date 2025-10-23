import UserCard from "@/Components/UserCard";
import { url } from "@/constant";
import type { user } from "@/types/types";
import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState<user[]>([]);

  const getUsers = async () => {
    try {
      const token = await localStorage.getItem("session_code");
      const response = await axios.get(`${url}/user/get/all-users`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response.data);
      setUsers(response.data.users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Box className="p-4">
      {users.map((user, i) => (
        <UserCard user={user} key={i} />
      ))}
    </Box>
  );
};

export default Users;
