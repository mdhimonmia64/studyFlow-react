import { LuNotebookPen } from "react-icons/lu";
import { Link } from "react-router";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user,setUser, loading } = useAuth();

  const handleLogOut = async() => {
      try{
        const response = await fetch("/api/auth/logout",{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
          },
          credentials:"include"
        });
        const data = await response.json();
        if(data.success){
          toast.success(data.message || "Logged out Successfully!");
          setUser(null)
        }else{
          throw new Error(data.message || "Failed to log out.")
        }
      }catch(error){
        console.error(error);
        toast.error(error.message || "An error occurred. Please try again.")
      }
  }

  console.log(user);
  const navLink = (
    <>
      <li>
        <Link to="/features">Features</Link>
      </li>
      <li>
        <Link to="/how-it-works">How it Works</Link>
      </li>
      <li>
        <Link to="/">Pricing</Link>
      </li>
      <li>
        <Link to="/">FAQ</Link>
      </li>
    </>
  );
  return (
    <div className="bg-[#f0f1eb] fixed top-0 left-0 z-50 w-full">
      <div className="navbar shadow-sm container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-black"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
            >
              {navLink}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl text-[#0e7c66]">
            <LuNotebookPen size={30} />
            StudyFlow
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-black">{navLink}</ul>
        </div>
        <div className="navbar-end gap-2">
          {loading ? (
            <span className="loading loading-spinner text-success"></span>
          ) : user ? (
            <>
              <button
                className="btn w-[70px] w-[70px]"
                popoverTarget="popover-1"
                style={{ anchorName: "--anchor-1" }}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQADgbezvA1Up9YvdXq2C19EROOi7QhAJB_wg-faJ2Xhg&s=10"
                  alt="user image"
                />
              </button>

              <ul
                className="dropdown menu w-[300px] rounded-box bg-base-100 shadow-sm"
                popover="auto"
                id="popover-1"
                style={{ positionAnchor: "--anchor-1" }}
              >
                <span>{user.name}</span>
                <li>
                  <Link className="block text-center" to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <button className="btn btn-danger border border-red-500 text-red-500 block" onClick={handleLogOut}>
                      Log Out
                    </button>
                </li>
              </ul>
            </>
          ) : (
            <>
              <Link to="/sign-in">
                <button className="btn font-semibold text-[17px] border border-2 border-[#0e7c66] hover:bg-[#0e7c66] hover:text-white">
                  Login
                </button>
              </Link>{" "}
              <Link to="/sign-up">
                <button className="btn bg-[#0e7c66] text-white">Signup</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
