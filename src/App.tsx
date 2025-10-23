import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "@/Pages/NotFound";
import MainPage from "@/Pages/MainPage";
import SignUp from "@/Pages/SignUp";
import Profile from "@/Pages/Profile";
import ChatLayout from "@/Layouts/ChatLayout";
import ChatPage from "@/Pages/ChatPage";
import SignIn from "@/Pages/SignIn";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-dark">
        <Routes>
          <Route element={<ChatLayout />}>
            <Route path="/" Component={MainPage} />
            <Route path="/inbox/:receiverId" Component={ChatPage} />
          </Route>
          <Route path="/*" Component={NotFound} />
          <Route path="/:username" Component={Profile} />
          <Route path="/sign-up" Component={SignUp} />
          <Route path="/sign-in" Component={SignIn} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
