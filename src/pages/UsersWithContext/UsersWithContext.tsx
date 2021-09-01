import React from "react";
import { EditModal } from "./EditModal/EditModal";
import { UsersList } from "./UsersList/UsersList";

export const UsersWithContext: React.FC = () => {
  return (
    <>
      <EditModal />
      <UsersList />
    </>
  );
};
