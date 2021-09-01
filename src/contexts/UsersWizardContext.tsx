import { useCreateUser } from "query-hooks/useUsers";
import React, { createContext, useContext, useState } from "react";

const UsersContext = createContext<IUsersContext | undefined>(undefined);

type IUsersContext = ReturnType<typeof useUsers>;

const useUsers = () => {
  const { createUser } = useCreateUser();
  // boolean do sterowania jaki formularz uzupełniamy bez/z detalami
  const [isQuickAdd, setIsQuickAdd] = useState(false);
  // na potrzeby przykładu bez detali będzie samo imię; a z detalami to imię i email
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const submituserCreation = () => {
    if (!isQuickAdd) {
      createUser({ name, email, phone });
    }

    cacnelUserCreation();
  };

  const cacnelUserCreation = () => {
    setName("");
    setEmail("");
    setPhone("");
  };

  return {
    isQuickAdd,
    setIsQuickAdd,
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    submituserCreation,
    cacnelUserCreation,
  };
};

export const UsersWizardContextProvider: React.FC = ({ children }) => {
  const value = useUsers();
  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};

export const useUsersCtx = () => {
  const ctx = useContext(UsersContext);

  if (ctx === undefined) {
    throw new Error("Uuups!");
  }

  return ctx;
};
