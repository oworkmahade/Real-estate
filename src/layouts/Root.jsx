import { Outlet, useNavigation } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Root() {
  const navigation = useNavigation();
  const location = useLocation();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    AOS.refresh();
  }, [location]);

  return (
    <div className="p-4 m-4 mx-auto">
      <div>
        {navigation.state === "loading" && (
          <div className="flex items-center justify-center h-screen">
            <span className="text-green-600 loading loading-spinner loading-lg"></span>
          </div>
        )}

        <Outlet />
      </div>
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
