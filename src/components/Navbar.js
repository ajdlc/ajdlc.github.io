import profilePic from '../assets/profile_pic.png';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img src={profilePic} alt="Profile" width={65} className="rounded-circle rounded-2 me-3" />
                    Alfred De La Costa
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* Consider making these props from the parent element. Including the dropdown menu items. */}
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/projects" className="nav-link">
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Experience
                            </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <a className="dropdown-item" href="#">Department of Defense</a>
                            </li>
                            <li><hr className="dropdown-divider"/></li>
                            <li>
                                <a className="dropdown-item" href="#">NASA Armstrong Flight Research Center</a>
                            </li>
                            <li><hr className="dropdown-divider"/></li>
                            <li>
                                <a className="dropdown-item" href="#">Older Experience</a>
                            </li>
                        </ul>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
        </header>
    );
  }  
  
  
  
  
  export default Navbar;
  