import { useEditUser, useGetUsers, useRemoveUser } from "query-hooks/useUsers";
import React, { createContext, useContext, useState } from "react";
import { User } from "types/User";

const UsersContext = createContext<IUsersContext | null>(null);

type IUsersContext = ReturnType<typeof useUsers>;

const useUsers = () => {
  const [userToEdit, setUserToEdit] = useState<User | null>(null);

  const { data: users, isLoading, isError } = useGetUsers();
  const { editUser } = useEditUser();
  const { removeUser } = useRemoveUser();

  return {
    isLoading,
    isError,
    users,
    userToEdit,
    setUserToEdit,
    editUser,
    removeUser,
  };
};

export const UsersContextProvider: React.FC = ({ children }) => {
  const value = useUsers();

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};

export const useUsersContext = () => {
  const ctx = useContext(UsersContext);

  if (!ctx) {
    throw new Error("Uuuups!");
  }

  return ctx;
};
