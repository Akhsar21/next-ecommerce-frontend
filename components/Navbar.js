import Link from "next/link";
import Links from "../lib/constants/links";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          Aksar
          {/* <img src="" alt=""/> */}
          <button type="button" className="toggle-btn">
            test
          </button>
        </div>
        <Links styleClass="nav-links" />
      </div>
    </nav>
  );
}
