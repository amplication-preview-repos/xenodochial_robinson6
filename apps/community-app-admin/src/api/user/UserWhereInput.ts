import { ChatSessionListRelationFilter } from "../chatSession/ChatSessionListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  chatSessions?: ChatSessionListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  userEmail?: StringNullableFilter;
  userFirstName?: StringNullableFilter;
  userLastName?: StringNullableFilter;
  username?: StringFilter;
  usernameField?: StringNullableFilter;
  userPassword?: StringNullableFilter;
};
