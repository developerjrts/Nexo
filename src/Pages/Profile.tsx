import { url } from "@/constant";
import type { user } from "@/types/types";
import { Avatar, Box, Button, CircularProgress } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NotFound from "./NotFound";

const Profile = () => {
  const navigate = useNavigate();
  const { username } = useParams();
  const [user, setUser] = useState<user | null>(null);
  const [loading, setLoading] = useState(true);

  const handleLogout = async () => {
    try {
      await localStorage.clear();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = async () => {
    try {
      const token = await localStorage.getItem("session_code");

      if (!token) {
        setLoading(false);
        navigate("/");
        return;
      }

      const response = await axios.get(`${url}/user/${username}`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(response.data.user);
    } catch (error) {
      console.error("Failed to fetch user:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (username) getUser();
  }, [username]);

  if (loading) {
    return (
      <Box className="w-full h-screen flex items-center justify-center">
        <CircularProgress />
      </Box>
    );
  }

  if (!user) {
    return <NotFound />;
  }

  return (
    <Box className="w-screen h-screen flex flex-col items-center justify-center p-4">
      {/* Avatar */}
      <Avatar
        src={user.profilePic || "/default-avatar.png"}
        alt={user.username}
        sx={{ width: 120, height: 120, fontSize: "3rem" }}
      />

      {/* Name & Username */}
      <h2 className="mt-4 text-2xl font-semibold">{user.name}</h2>
      <p className="text-gray-500">@{user.username}</p>

      {/* Bio */}
      <p className="mt-2 text-center text-gray-600 max-w-sm">
        {user.bio || "This user has no bio yet."}
      </p>

      {/* Details card */}
      <Box className="mt-6 p-4 w-full max-w-md rounded-lg shadow-md flex flex-col gap-2">
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Status:</strong>{" "}
          <span className={user.isOnline ? "text-green-500" : "text-gray-400"}>
            {user.isOnline ? "Online" : "Offline"}
          </span>
        </p>
        <p>
          <strong>Joined:</strong>{" "}
          {new Date(user.createdAt).toLocaleDateString()}
        </p>
      </Box>

      {/* Optional buttons */}
      <Box className="mt-4 flex gap-4">
        <Button variant="contained" color="primary">
          Edit Profile
        </Button>
        <Button onClick={handleLogout} variant="outlined" color="error">
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export default Profile;
