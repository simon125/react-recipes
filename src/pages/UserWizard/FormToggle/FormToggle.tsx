import React from "react";
import { Button, ButtonGroup } from "reactstrap";
import { useUsersCtx } from "contexts/UsersWizardContext";

interface FormToggleProps {}

export const FormToggle: React.FC<FormToggleProps> = () => {
  const { setIsQuickAdd, isQuickAdd } = useUsersCtx();

  return (
    <div className="d-flex justify-content-center">
      <ButtonGroup>
        <Button
          color="primary"
          onClick={() => setIsQuickAdd(true)}
          active={isQuickAdd}
        >
          Quick add
        </Button>
        <Button
          color="primary"
          onClick={() => setIsQuickAdd(false)}
          active={!isQuickAdd}
        >
          With details
        </Button>
      </ButtonGroup>
    </div>
  );
};
