import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ChatSessionCreateInput = {
  message?: string | null;
  user?: UserWhereUniqueInput | null;
};
