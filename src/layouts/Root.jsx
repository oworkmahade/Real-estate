import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div className="w-3/4 mx-auto p-4 m-4 border-2">
      <Outlet></Outlet>
    </div>
  );
}

export default Root;
