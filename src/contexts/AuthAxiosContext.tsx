import React from "react";
import axios from "axios";

/**
 * AXIOS MA SWÓJ KONTEXT PONIEWAŻ JEST TU TRZYMANY JWT, OBSŁUGA REFRESHOWANIA JWT itd
 */

const AxiosContext =
  React.createContext<AxiosContextType | undefined>(undefined);

const useAxios = () => {
  const authAxios = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
  });

  authAxios.interceptors.request.use(
    async (config) => {
      console.log({ postedData: config.data });
      return config;
    },
    () => {
      return Promise.reject();
    }
  );

  return authAxios;
};

type AxiosContextType = ReturnType<typeof useAxios>;

export const AxiosContextProvider: React.FC = ({ children }) => {
  const value = useAxios();

  return (
    <AxiosContext.Provider value={value}>{children}</AxiosContext.Provider>
  );
};

export const useAuthAxios = () => {
  const ctx = React.useContext(AxiosContext);

  if (!ctx) {
    throw new Error("Uuups!");
  }

  return ctx;
};
