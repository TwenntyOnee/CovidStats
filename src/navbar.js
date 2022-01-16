import "./App.css";
import cIcon from "../src/images/covidIcon.png";
function Navbar() {
  return (
    <div className="navbar flex font-medium w-screen text-blue-200 pt-5">
      <p className="w-40 text-white font-bold ">Covid stats</p>
      <img src={cIcon} className="-mt-1.5" width="45px" alt="" />
    </div>
  );
}
export default Navbar;
