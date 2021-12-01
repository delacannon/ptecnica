import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Users, Login } from "pages";
import { PrivateRoute } from "components/routing/private-route";
import { Layout } from "components/gui/layout";

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="users/*" element={<PrivateRoute component={Users} />} />
          <Route path="login/*" element={<Login />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
