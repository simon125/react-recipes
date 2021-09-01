import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";
import { AxiosContextProvider } from "./AuthAxiosContext";

const queryClient = new QueryClient();

export const AppProvider: React.FC = ({ children }) => {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <AxiosContextProvider>{children}</AxiosContextProvider>
      </QueryClientProvider>
    </Router>
  );
};
