import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function Root() {
  return (
    <div className="p-4 m-4 mx-auto">
      <Outlet></Outlet>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            borderRadius: "12px",
            background: "#ffffff",
            color: "#333",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          },
        }}
      />
    </div>
  );
}

export default Root;
