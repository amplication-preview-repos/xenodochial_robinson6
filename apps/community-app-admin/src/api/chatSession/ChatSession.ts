import { User } from "../user/User";

export type ChatSession = {
  createdAt: Date;
  id: string;
  message: string | null;
  updatedAt: Date;
  user?: User | null;
};
