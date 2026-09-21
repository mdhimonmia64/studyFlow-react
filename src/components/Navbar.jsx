import { LuNotebookPen } from "react-icons/lu";
import { Link } from "react-router";

const Navbar = () => {
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
          <Link to="/sign-in">
            <button className="btn font-semibold text-[17px] border border-2 border-[#0e7c66] hover:bg-[#0e7c66] hover:text-white">
              Login
            </button>
          </Link>
          <Link to="/sign-up">
            <button className="btn bg-[#0e7c66] text-white">Signup</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
