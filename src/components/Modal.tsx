import React from "react";
import {
  Button,
  Modal as ModalLayout,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

interface ModalProps {
  isOpen: boolean;
  title: string;
  onCloseModal: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  children,
  onCloseModal,
}) => {
  return (
    <div>
      {isOpen && (
        <ModalLayout isOpen={true} toggle={onCloseModal}>
          {!!title && <ModalHeader toggle={onCloseModal}>{title}</ModalHeader>}
          <ModalBody>{children}</ModalBody>
        </ModalLayout>
      )}
    </div>
  );
};
