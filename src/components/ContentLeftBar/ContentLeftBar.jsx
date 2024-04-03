import "./ContentLeftBar.css";

function ContentLeftBar() {
  return (
    <div className="content-left-bar">
      <div className="left-bar-elemets">
        <div className="left-bar-img">ICON</div>
        <p className="left-bar-temp">25°С</p>
        <p className="left-bar-location-data">Moscow | 03.04.2024</p>
      </div>
    </div>
  );
}

export default ContentLeftBar;
