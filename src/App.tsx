import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Users, Login, PrivateRoute } from "pages";
import { Layout } from "components/layout";

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
