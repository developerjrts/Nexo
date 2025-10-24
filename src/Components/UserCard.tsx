import type { user } from "@/types/types";
import { Avatar, Box, Card, Link } from "@mui/material";

interface props {
  user: user;
}

const UserCard = ({ user }: props) => {
  return (
    <Link underline="hover" href={`/inbox/${user._id}`}>
      <Card
        sx={{
          backgroundColor: "color-mix(in oklab, #135bec 10%, transparent)",
          borderRadius: "10px ",
        }}
        className="p-3 w-full cursor-pointer rounded-md flex gap-4"
      >
        <Avatar src={user.profilePic} />
        <Box>
          <h1 className="font-medium text-xl">{user.name}</h1>
          <h1 className="font-normal text-md">{user.username}</h1>
        </Box>
      </Card>
    </Link>
  );
};

export default UserCard;
