import React from "react";
import { Card, Button } from "reactstrap";
import { DetailedForm } from "./DetailedForm/DetailedForm";
import { FormToggle } from "./FormToggle/FormToggle";
import { QuickAddForm } from "./QuickAddForm/QuickAddForm";
import { useUsersCtx } from "contexts/UsersWizardContext";

interface UserWizardProps {}

export const UserWizard: React.FC<UserWizardProps> = () => {
  const { isQuickAdd, submituserCreation, cacnelUserCreation } = useUsersCtx();

  return (
    <div>
      <h2 className="display-2 w-50 mx-auto">Users</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <FormToggle />
        <Card className="w-50 mx-auto mt-5 p-3">
          <QuickAddForm />
        </Card>
        {!isQuickAdd && (
          <Card className="w-50 mx-auto mt-5 p-3">
            <DetailedForm />
          </Card>
        )}
        <div className="d-flex justify-content-center mt-3">
          <Button onClick={submituserCreation} color="success" className="mx-3">
            Save
          </Button>
          <Button onClick={cacnelUserCreation} color="secondary">
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};
