import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "@/Pages/NotFound";
import MainPage from "@/Pages/MainPage";
import SignUp from "@/Pages/SignUp";
import Profile from "@/Pages/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-dark">
        <Routes>
          <Route path="/*" Component={NotFound} />
          <Route path="/" Component={MainPage} />
          <Route path="/:username" Component={Profile} />
          <Route path="/sign-up" Component={SignUp} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
