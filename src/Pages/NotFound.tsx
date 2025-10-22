import { Button } from "@mui/material";
import { HomeRounded } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-dark dark group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-start p-6">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-white">Nexo</h1>
          </div>
        </header>
        <main className="flex-1 flex items-center justify-center">
          <div className="px-4 py-6 text-center">
            <div className="flex flex-col items-center gap-6">
              <div className="flex max-w-lg flex-col items-center gap-4">
                <h2 className="text-5xl font-extrabold text-white tracking-tight">
                  404
                </h2>
                <p className="text-2xl font-bold text-white">Page Not Found</p>
                <p className="text-zinc-400 dark:text-zinc-500 max-w-md">
                  Oops! It looks like you've taken a wrong turn. The page you're
                  looking for doesn't exist or may have been moved.
                </p>
              </div>
              <Button
                onClick={() => navigate("/")}
                variant="contained"
                className="flex gap-2 items-center"
              >
                <HomeRounded />
                Go to Home
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default NotFound;
