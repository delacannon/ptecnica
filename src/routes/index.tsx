import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, UsersPage, LoginPage, NotFoundPage } from "pages";
import { Layout } from "components/Layout";
import { PrivateRoute } from "./private-route";

export const IndexRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="users/"
            element={<PrivateRoute component={UsersPage} />}
          />
          <Route path="login/*" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
