import { useUsersCtx } from "contexts/UsersWizardContext";
import React from "react";
import { Input, FormGroup, Label } from "reactstrap";

interface QuickAddFormProps {}

export const QuickAddForm: React.FC<QuickAddFormProps> = () => {
  const { name, setName } = useUsersCtx();

  return (
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
  );
};
