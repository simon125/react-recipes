import React from "react";
import { Button, ListGroup, ListGroupItem } from "reactstrap";
import { User } from "types/User";

interface ListItemProps {
  user?: User;
}

const ListItem: React.FC<ListItemProps> = ({ user, children }) => {
  return (
    <ListGroupItem className="d-flex justify-content-between">
      {children}
    </ListGroupItem>
  );
};

interface UsersListProps {
  users: User[];
  setUserToEdit: (user: User) => void;
  removeUser: (user: User) => void;
}

export const UsersList: React.FC<UsersListProps> = ({
  users,
  setUserToEdit,
  removeUser,
}) => {
  return (
    <>
      <ListGroup className="my-3 mx-auto w-75">
        {users.map((user) => {
          return (
            <ListItem key={user.id}>
              <div>
                <p className="lead">{user.name}</p>
                <a href={`mailto:${user.email}`}>
                  <strong>{user.email}</strong>
                </a>
              </div>
              <div>
                <Button
                  className="m-1"
                  color="secondary"
                  onClick={() => setUserToEdit(user)}
                >
                  Edit
                </Button>
                <Button
                  className="m-1"
                  color="danger"
                  onClick={() => removeUser(user)}
                >
                  Remove
                </Button>
              </div>
            </ListItem>
          );
        })}
      </ListGroup>
    </>
  );
};
