import React, { useCallback } from "react";
import { useGetUsers, useEditUser, useRemoveUser } from "query-hooks/useUsers";
import { User } from "types/User";

export const useUsers = () => {
  const [userToEdit, setUserToEdit] = React.useState<User | null>(null);
  const { data, isLoading, isError } = useGetUsers();
  const { editUser } = useEditUser();
  const { removeUser } = useRemoveUser();

  const handleSubmitEdit = useCallback(() => {
    if (!userToEdit) {
      return;
    }
    editUser(userToEdit);
    setUserToEdit(null);
  }, [editUser, userToEdit]);

  const resetUserToEdit = useCallback(() => {
    setUserToEdit(null);
  }, []);

  return {
    users: data,
    isLoading,
    isError,
    userToEdit,
    setUserToEdit: (user: User | null) => setUserToEdit(user),
    handleSubmitEdit,
    resetUserToEdit,
    removeUser,
  };
};
