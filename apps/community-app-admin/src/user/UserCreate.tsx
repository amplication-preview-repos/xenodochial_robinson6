import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  PasswordInput,
} from "react-admin";

import { ChatSessionTitle } from "../chatSession/ChatSessionTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="chatSessions"
          reference="ChatSession"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ChatSessionTitle} />
        </ReferenceArrayInput>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="userEmail" source="userEmail" type="email" />
        <TextInput label="userFirstName" source="userFirstName" />
        <TextInput label="userLastName" source="userLastName" />
        <TextInput label="Username" source="username" />
        <TextInput label="usernameField" source="usernameField" />
        <TextInput label="userPassword" source="userPassword" />
      </SimpleForm>
    </Create>
  );
};
