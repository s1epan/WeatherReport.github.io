import { useEffect } from "react";
import { useState } from "react";
import "./Header.css";

function Header(props) {
  const [location, setLocation] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLocation(props.data);
  });

  const handleKey = (event) => {
    if (event.key === "Enter") {
      props.func(search);
    }
  };

  return (
    <div className="header">
      <img
        width="25"
        height="25"
        src="https://img.icons8.com/ios-filled/25/marker.png"
        alt="marker"
      />
      <div className="header-text">{location ? location.tz_id : "NF"}</div>
      <div className="search">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKey}
        />
        <button className="search-btn" onClick={() => props.func(search)}>
          <img
            width="15"
            height="15"
            src="https://img.icons8.com/ios/15/search--v1.png"
            alt="search--v1"
          />
        </button>
      </div>
    </div>
  );
}

export default Header;
