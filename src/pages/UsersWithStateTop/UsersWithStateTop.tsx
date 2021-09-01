import React from "react";
import { Loader } from "components/Loader";
import { useUsers } from "./useUsers";
import { UsersList } from "./UsersList/UsersList";
import { EditModal } from "./EditModal/EditModal";

export const UsersWithStateTop: React.FC = () => {
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
    <h2>Uuuups! Something went wrong!</h2>;
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
        setUserToEdit={setUserToEdit}
        onSubmit={handleSubmitEdit}
        onCloseModal={resetUserToEdit}
      />
    </div>
  );
};
