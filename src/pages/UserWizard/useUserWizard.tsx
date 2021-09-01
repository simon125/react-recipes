import React from "react";

export const useUserWizard = () => {
  const [isQuickAdd, setIsQuickAdd] = React.useState(true);

  return {
    isQuickAdd,
    setIsQuickAdd,
  };
};
