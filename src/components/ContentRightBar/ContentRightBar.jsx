import { useState } from "react";
import "./ContentRightBar.css";

function ContentRightBar(props) {
  const [data, setData] = useState([]);

  return (
    <div className="content-right-bar">
      <div className="right-bar-elemets"></div>
    </div>
  );
}

export default ContentRightBar;
