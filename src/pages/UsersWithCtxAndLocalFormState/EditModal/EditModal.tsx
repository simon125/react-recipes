import React from "react";
import { Input, FormGroup, Label, Button } from "reactstrap";
import { Modal } from "components/Modal";
import { useEditModal } from "./useEditModal";

interface EditModalProps {}

export const EditModal: React.FC<EditModalProps> = () => {
  const {
    name,
    email,
    phone,
    isModalOpen,
    setName,
    setEmail,
    setPhone,
    handleCloseModal,
    handleSubmit,
  } = useEditModal();

  if (!isModalOpen) return null;

  return (
    <Modal
      isOpen={isModalOpen}
      title="Edit user"
      onCloseModal={handleCloseModal}
    >
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
