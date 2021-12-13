import { Navigate } from "react-router-dom";
import { UsersPage } from "pages";
import { useAppSelector } from "hooks/redux-hooks";

type Props = {
  component: React.ComponentType;
};

export const PrivateRoute = ({ component }: Props) => {
  const { token } = useAppSelector((state) => state.appReducer);

  if (token) {
    return <UsersPage />;
  }

  return <Navigate to="/login" />;
};
