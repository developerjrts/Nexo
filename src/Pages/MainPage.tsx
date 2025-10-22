import Home from "@/Pages/Home";
import SignIn from "@/Pages/SignIn";
import { url } from "@/constant";
import { LinearProgress } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const MainPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  const checkAuth = async () => {
    try {
      const token = await localStorage.getItem("session_code");

      if (!token) {
        setLoading(false);
        setIsLoggedIn(false);
        return;
      }

      const response = await axios.get(`${url}/auth/check-auth`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setLoading(false);
      console.log(response.data);

      if (response.data.status) {
        setIsLoggedIn(true);
        localStorage.setItem("user", JSON.stringify(response.data.user));
      } else {
        setIsLoggedIn(false);
        localStorage.clear();
      }
    } catch (error) {
      console.log("Auth check failed:", error);
      setIsLoggedIn(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <LinearProgress className="w-[80%]" />
      </div>
    );
  }

  return <>{isLoggedIn ? <Home /> : <SignIn />}</>;
};

export default MainPage;
