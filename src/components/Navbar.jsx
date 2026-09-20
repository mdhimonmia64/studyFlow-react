import { LuNotebookPen } from "react-icons/lu";

const Navbar = () => {
  const navLink = (
    <>
      <li>
        <a href="">Features</a>
      </li>
      <li>
        <a href="">How it Works</a>
      </li>
      <li>
        <a href="">Pricing</a>
      </li>
      <li>
        <a href="">FAQ</a>
      </li>
    </>
  );
  return (
    <div className="bg-[#f0f1eb]">
      <div className="navbar shadow-sm container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-black">
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
          <a className="btn btn-ghost text-xl text-[#0e7c66]">
            <LuNotebookPen size={30} />
            StudyFlow
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-black">{navLink}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
