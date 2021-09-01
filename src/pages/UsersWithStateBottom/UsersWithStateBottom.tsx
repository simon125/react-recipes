/**
 * podejście z wydzieleniem logiki do hooka (roboczo nazwałem hooka komponentu)
 * + odseparowanie logiki i zwrócenie czytelnego api
 * + stan formularza trzymany nisko w hierarchi - nie powoduje nie potrzebnych rerenderów większej części apki
 * - brak kontekstu dużo propsów
 */

import React from "react";
import { Loader } from "components/Loader";
import { useUsers } from "./useUsers";
import { UsersList } from "./UsersList/UsersList";
import { EditModal } from "./EditModal/EditModal";

export const UsersWithStateBottom: React.FC = () => {
  const {
    isLoading,
    isError,
    users,
    userToEdit,
    resetUserToEdit,
    handleSubmitEdit,
    setUserToEdit,
    removeUser,
  } = useUsers();

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center my-5">
        <Loader />
      </div>
    );
  }

  if (isError) {
    return <h2>Uuuups! Something went wrong!</h2>;
  }

  if (!users || users.length === 0) {
    return <h2>There is no data to display</h2>;
  }

  return (
    <div>
      <UsersList
        users={users}
        setUserToEdit={setUserToEdit}
        removeUser={removeUser}
      />
      <EditModal
        userToEdit={userToEdit}
        onSubmit={handleSubmitEdit}
        onCloseModal={resetUserToEdit}
      />
    </div>
  );
};
