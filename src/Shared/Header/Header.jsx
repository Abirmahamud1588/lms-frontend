import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { useContext } from "react";
import logo from "/logo.png";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="navbar w-full flex container lg:flex md:flex-row flex-col justify-between mx-auto bg-opacity-100 bg-[#ffffff] text-black font-semibold">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2"
            >
              <li>
                <a href="#faq">About</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
              <li>
                <a href="#team">Blog</a>
              </li>
              {user ? (
                <>
                  <div className="flex-none gap-2">
                    <div className="form-control"></div>
                    <div className="dropdown dropdown-end">
                      <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                      >
                        <img
                          className="w-[50px] h-[50px] rounded-full border border-black"
                          src={
                            user?.photoURL ||
                            "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                          }
                          alt={user?.displayName || "Avatar"}
                        />
                      </div>
                      <ul
                        tabIndex={0}
                        className="mt-3 ml-10 left-0 z-[1] p-16 shadow menu menu-sm text-white dropdown-content bg-black rounded-box w-52"
                        mx-auto
                      >
                        <Link className="ml-2" to="/dashboard">
                          Dashboard
                        </Link>

                        <li>
                          <btn
                            className="btn btn-success"
                            onClick={handleLogout}
                          >
                            Logout
                          </btn>
                        </li>
                      </ul>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <li className="">
                    <Link to="/login" className="btn text-white bg-[#020DFF]">
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <img src={logo} className=" w-[260px]"></img>
        </div>
        <div className="navbar-center hidden lg:flex items-center">
          <ul className="menu menu-horizontal px-1 items-center">
            <li>
              <a href="#faq">About</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
            <li>
              <a href="#team">Blog</a>
            </li>
            {user ? (
              <>
                <div className="flex-none gap-2">
                  <div className="form-control"></div>
                  <div className="dropdown dropdown-end">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <img
                        className="w-[50px] h-[50px] rounded-full border border-black"
                        src={
                          user?.photoURL ||
                          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        }
                        alt={user?.displayName || "Avatar"}
                      />
                    </div>
                    <ul
                      tabIndex={0}
                      className="mt-3 z-[1] p-2 shadow menu menu-sm text-white dropdown-content bg-black rounded-box w-52"
                    >
                      <Link className="ml-2" to="/dashboard">
                        Dashboard
                      </Link>

                      <li>
                        <a onClick={handleLogout}>Logout</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            ) : (
              <>
                <li className="">
                  <Link to="/login" className="btn text-white bg-[#020DFF]">
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
