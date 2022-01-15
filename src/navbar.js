import "./App.css";
import cIcon from "../src/images/covidIcon.png";
function Navbar() {
  return (
    <div className="navbar flex font-medium w-screen text-blue-200 pt-5">
      <p className="w-40 text-white font-bold ">Covid stats</p>
      <img src={cIcon} className="-mt-1.5" width="45px" alt="" />

      <nav className="flex justify-around w-screen">
        <a href="" className="">
          Home
        </a>
        <a href="" className="">
          Countries
        </a>
        <a href="" className="">
          About
        </a>
        <a href="" className="">
          Contact
        </a>
      </nav>
    </div>
  );
}
export default Navbar;
