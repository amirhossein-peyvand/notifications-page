import "../sass/Navbar.scss";

interface Props {
  notifications?: number;
  onMarkAll?: () => void;
}

const Navbar = ({ notifications, onMarkAll }: Props) => {
  return (
    <nav className="navbar">
      <div className="left">
        <p>Notifications</p>
        <span>{notifications}</span>
      </div>
      <div className="right">
        <p onClick={onMarkAll}>Mark all as read</p>
      </div>
    </nav>
  );
};

export default Navbar;
