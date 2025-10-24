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

export interface message {
  _id?: string;
  senderId: {
    _id: string;
    name: string;
    username: string;
    avatar: string;
  };
  receiverId?: {
    _id: string;
    name: string;
    username: string;
    avatar: string;
  };
  chatId?: string;
  message?: string;
  type?: "text" | "image" | "video" | "audio" | "file" | "system";
  mediaUrl?: string;
  repliedTo?: string;
  isEdited?: boolean;
  createdAt?: string;
  updatedAt?: string;
}
