import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Login, Users } from "pages";
import { useAppSelector } from "hooks/redux-hooks";

type Props = {
  component: React.ComponentType;
};

export const PrivateRoute = ({ component }: Props) => {
  const { token } = useAppSelector((state) => state.appReducer);

  if (token) {
    return <Users />;
  }

  if (!token) {
    return <Login />;
  }

  return <Navigate to="/login" />;
};
