import { useUsersCtx } from "contexts/UsersWizardContext";
import React from "react";
import { Input, FormGroup, Label } from "reactstrap";

interface DetailedFormProps {}

export const DetailedForm: React.FC<DetailedFormProps> = () => {
  const { phone, setPhone, email, setEmail } = useUsersCtx();

  return (
    <>
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
    </>
  );
};
