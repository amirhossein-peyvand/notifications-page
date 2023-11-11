import "../sass/Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left">
        <p>Notifications</p>
        <span>3</span>
      </div>
      <div className="right">
        <p>Mark all as read</p>
      </div>
    </nav>
  );
};

export default Navbar;
