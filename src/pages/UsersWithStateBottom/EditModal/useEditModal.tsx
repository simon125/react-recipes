/**
 * LEPSZE PODEJŚCIE? trzymanie stanu formularza w hooku nie przy zmianie nie rerenderuje sie cały listing
 */
import { useState, useEffect } from "react";
import { User } from "types/User";

export const useEditModal = (userToEdit: User | null) => {
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

  return {
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
  };
};
