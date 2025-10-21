import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to={"/sign-in"}>Sign In</Link>
      <Link to={"/sign-up"}>Sign Up</Link>
    </div>
  );
};

export default Home;
