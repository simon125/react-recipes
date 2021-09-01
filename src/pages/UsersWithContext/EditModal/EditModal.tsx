import React from "react";
import { Input, FormGroup, Label, Button } from "reactstrap";
import { Modal } from "components/Modal";
import { useEditModal } from "./useEditModal";

interface EditModalProps {}

export const EditModal: React.FC<EditModalProps> = () => {
  const { userToEdit, handleChange, handleCloseModal, handleSubmit } =
    useEditModal();

  if (!userToEdit) return null;

  return (
    <Modal
      isOpen={!!userToEdit}
      title="Edit user"
      onCloseModal={handleCloseModal}
    >
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
        <Button color="primary" onClick={handleSubmit}>
          Submit
        </Button>
        <Button color="secondary" onClick={handleCloseModal}>
          Cancel
        </Button>
      </div>
    </Modal>
  );
};
