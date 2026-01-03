import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
const Layout = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />

      <main
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: 16,
          width: "100%",
          flex: 1,
        }}
      >
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
export default Layout;