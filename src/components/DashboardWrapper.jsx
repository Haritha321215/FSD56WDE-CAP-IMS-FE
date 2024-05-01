import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import userServices from "../services/userServices";

export async function loader() {
  // get the currently logged in user
  const user = await userServices.getCurrentUser();

  // return the user
  return { user };
}

const DashboardWrapper = () => {
  const navigate = useNavigate();

  const { user } = useLoaderData();
    // console.log(user);
  const handleLogout = () => {
    // log the user out
    userServices
      .logout()
      .then(() => {
        alert("You have been logged out!");

        // redirect to the login page
        setTimeout(() => {
          navigate("/login");
        }, 500);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <p>
        Welcome {user ? user.data.user.name : "Guest"}!{" "}
        <button onClick={handleLogout}>logout</button>
      </p>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardWrapper;

//dashboard, login, logout, services, loaders, jobs
