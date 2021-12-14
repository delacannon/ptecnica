import { createElement } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "hooks/redux-hooks";

type Props = {
  component: React.ComponentType;
};

export const PrivateRoute = ({ component }: Props) => {
  const { token } = useAppSelector((state) => state.appReducer);

  if (token) {
    return createElement(component);
  }

  return <Navigate to="/login" />;
};
