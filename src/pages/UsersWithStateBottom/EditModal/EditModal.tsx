import React from "react";
import { Input, FormGroup, Label, Button } from "reactstrap";
import { Modal } from "components/Modal";
import { User } from "types/User";
import { useEditModal } from "./useEditModal";

interface EditModalProps {
  userToEdit: User | null;
  onSubmit: (user: Partial<User>) => void;
  onCloseModal: () => void;
}

export const EditModal: React.FC<EditModalProps> = ({
  userToEdit,
  onSubmit,
  onCloseModal,
}) => {
  const { name, setName, email, setEmail, phone, setPhone } =
    useEditModal(userToEdit);

  return (
    <Modal isOpen={!!userToEdit} title="Edit user" onCloseModal={onCloseModal}>
      <div>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            id="name"
            placeholder="Name"
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Phone</Label>
          <Input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            name="phone"
            id="phone"
            placeholder="Phone"
          />
        </FormGroup>
        <Button
          color="primary"
          onClick={() => onSubmit({ ...userToEdit, name, phone, email })}
        >
          Submit
        </Button>
        <Button color="secondary" onClick={onCloseModal}>
          Cancel
        </Button>
      </div>
    </Modal>
  );
};
