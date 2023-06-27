import AdminLogin from "./pages/AdminLogin";

export const RequiresAuth = ({ children }) => {
  return localStorage.getItem("token") ? children : <AdminLogin />;
};
