import { Outlet } from "react-router-dom";
import Header from "./Header";

function RootLayout() {
  return (
    <>
      <Header />
      <div className="min-h-screen p-6">
        <Outlet />
      </div>
    </>
  );
}

export default RootLayout;