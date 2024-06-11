import { ChatSessionUpdateManyWithoutUsersInput } from "./ChatSessionUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  chatSessions?: ChatSessionUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  userEmail?: string | null;
  userFirstName?: string | null;
  userLastName?: string | null;
  username?: string;
  usernameField?: string | null;
  userPassword?: string | null;
};
