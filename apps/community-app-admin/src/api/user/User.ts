import { ChatSession } from "../chatSession/ChatSession";
import { JsonValue } from "type-fest";

export type User = {
  chatSessions?: Array<ChatSession>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  userEmail: string | null;
  userFirstName: string | null;
  userLastName: string | null;
  username: string;
  usernameField: string | null;
  userPassword: string | null;
};
