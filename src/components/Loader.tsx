import React from "react";
import Spinner from "react-loader-spinner";
interface LoaderProps {}

export const Loader: React.FC<LoaderProps> = (props) => {
  return (
    <Spinner
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  );
};
