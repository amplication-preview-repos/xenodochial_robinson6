import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ChatSessionUpdateInput = {
  message?: string | null;
  user?: UserWhereUniqueInput | null;
};
