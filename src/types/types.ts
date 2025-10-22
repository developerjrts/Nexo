export interface user {
  _id: string;
  username: string;
  email: string;
  name: string;
  isVarified: boolean;
  password?: string;
  profilePic: string;
  bio: string;
  isOnline: boolean;
  lastSeen?: Date;
  socketId?: string | null;
  contacts: string[];
  blockedUsers: string[];
  createdAt: Date;
  updatedAt: Date;
}
