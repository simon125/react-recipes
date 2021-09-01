import React from "react";
import { useUsersContext } from "contexts/UsersContext";

export const useEditModal = () => {
  const { userToEdit, setUserToEdit, editUser } = useUsersContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUser = userToEdit
      ? { ...userToEdit, [e.target.name]: e.target.value }
      : null;
    setUserToEdit(newUser);
  };

  const handleCloseModal = () => {
    setUserToEdit(null);
  };

  const handleSubmit = () => {
    if (!!userToEdit) {
      editUser(userToEdit);
    }
  };

  return {
    userToEdit,
    handleChange,
    handleCloseModal,
    handleSubmit,
  };
};
