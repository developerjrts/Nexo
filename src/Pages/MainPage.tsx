import Home from "@/Pages/Home";
import { url } from "@/constant";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  const checkAuth = async () => {
    try {
      const token = await localStorage.getItem("session_code");

      if (!token) {
        navigate("/sign-in");
        return;
      }

      const response = await axios.get(`${url}/auth/check-auth`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);

      if (response.data.status) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
      } else {
        localStorage.clear();
        navigate("/sign-in");
      }
    } catch (error) {
      console.log("Auth check failed:", error);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <>
      <Home />
    </>
  );
};

export default MainPage;
