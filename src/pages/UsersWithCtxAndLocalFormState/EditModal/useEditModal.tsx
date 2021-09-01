import { useState, useEffect } from "react";
import { useUsersContext } from "contexts/UsersContext";

export const useEditModal = () => {
  const { userToEdit, setUserToEdit, editUser } = useUsersContext();

  const {
    name: userName,
    email: userEmail,
    phone: userPhone,
  } = userToEdit || {};

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  useEffect(() => {
    setName(userName || "");
    setEmail(userEmail || "");
    setPhone(userPhone || "");
  }, [userName, userEmail, userPhone]);

  const handleCloseModal = () => {
    setUserToEdit(null);
  };

  const handleSubmit = () => {
    if (!!userToEdit) {
      editUser(userToEdit);
    }
  };

  return {
    isModalOpen: !!userToEdit,
    name,
    email,
    phone,
    setName,
    setEmail,
    setPhone,
    handleCloseModal,
    handleSubmit,
  };
};
