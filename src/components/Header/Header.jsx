import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img
        width="25"
        height="25"
        src="https://img.icons8.com/ios-filled/25/marker.png"
        alt="marker"
      />
      <div className="header-text">Current location</div>
    </div>
  );
}

export default Header;
