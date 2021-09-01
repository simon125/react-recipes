import { EditModal } from "./EditModal/EditModal";
import { UsersList } from "./UsersList/UsersList";
import React from "react";

export const UsersWithCtxAndLocalFormState: React.FC = () => {
  return (
    <>
      <EditModal />
      <UsersList />
    </>
  );
};
