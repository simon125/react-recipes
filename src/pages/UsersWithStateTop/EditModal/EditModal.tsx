import React from "react";
import { Input, FormGroup, Label, Button } from "reactstrap";
import { Modal } from "components/Modal";
import { User } from "types/User";

interface EditModalProps {
  userToEdit: User | null;
  onSubmit: () => void;
  onCloseModal: () => void;
  setUserToEdit: (user: User | null) => void;
}

export const EditModal: React.FC<EditModalProps> = ({
  userToEdit,
  setUserToEdit,
  onSubmit,
  onCloseModal,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUser = userToEdit
      ? { ...userToEdit, [e.target.name]: e.target.value }
      : null;
    setUserToEdit(newUser);
  };

  if (!userToEdit) return null;

  return (
    <Modal isOpen={!!userToEdit} title="Edit user" onCloseModal={onCloseModal}>
      <div>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            value={userToEdit.name}
            onChange={handleChange}
            type="text"
            name="name"
            id="name"
            placeholder="Name"
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            value={userToEdit.email}
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Phone</Label>
          <Input
            value={userToEdit.phone}
            onChange={handleChange}
            type="text"
            name="phone"
            id="phone"
            placeholder="Phone"
          />
        </FormGroup>
        <Button color="primary" onClick={() => onSubmit()}>
          Submit
        </Button>
        <Button color="secondary" onClick={onCloseModal}>
          Cancel
        </Button>
      </div>
    </Modal>
  );
};
