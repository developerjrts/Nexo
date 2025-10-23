import { AppBar, Box, Button, Link, Toolbar } from "@mui/material";

const Nav = () => {
  const handleLogout = async () => {
    try {
      await localStorage.clear();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppBar
      position="static"
      className="bg-gray-800"
      sx={{
        background: "#1e2939",
        boxShadow: "none",
        borderBottom: "1px solid #4a5565 ",
        width: "100%",
        display: { xs: "none", md: "block" },
      }}
    >
      <Toolbar className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Nexo</h1>
        <Box className="flex gap-4 items-center justify-center">
          <Button>
            <Link
              sx={{
                color: "white",
              }}
              underline="hover"
              href="/settings"
            >
              Settings
            </Link>
          </Button>
          <Button
            sx={{
              color: "white",
            }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
