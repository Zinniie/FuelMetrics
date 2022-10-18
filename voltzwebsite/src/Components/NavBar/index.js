import "./style.css";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar fixed-top top-nav py-4  px-5 d-flex align-items-center justify-content-between ">
        <div className="nav__brand  d-flex align-items-center justify-content-between">
          <div className="nav_img w-25"></div>
          <div className="nav_text w-75 d-flex align-items-center justify-content-center mt-1">
            Voltz <span className="mx-1">Control</span>
          </div>
        </div>
        <div className="nav-categories d-flex align-items-center justify-content-between">
          <div>Home</div>
          <div>Features</div>
          <div>Blog</div>
          <div>
            <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div className="nav-auth d-flex align-items-center justify-content-between">
          <div className="login text-white">Login</div>
          <div className="signup shadow-lg py-2 px-3 rounded-3 text-white">
            Sign Up
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
