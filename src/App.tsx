import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/Pages/Home";
import SignIn from "@/Pages/SignIn";
import SignUp from "@/Pages/SignUp";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-dark">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/sign-in" Component={SignIn} />
          <Route path="/sign-up" Component={SignUp} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
