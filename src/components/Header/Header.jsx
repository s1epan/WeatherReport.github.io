import { useEffect } from "react";
import { useState } from "react";
import "./Header.css";

function Header(props) {
  const [location, setLocation] = useState([]);
  const [search, setSearch] = useState("");
  const [language, setLanguage] = useState("");
  const [boolean, setBoolean] = useState(false);
  const [dataLanguage, setDataLanguage] = useState();

  const lg = [
    {
      name: "Arabic",
      index: "ar",
      src: "https://img.icons8.com/color/30/saudi-arabia.png",
      key: Math.random(),
    },
    {
      name: "Bulgarian",
      index: "bg",
      src: "https://img.icons8.com/color/30/bulgaria.png",
      key: Math.random(),
    },
    {
      name: "ChineseSimplified",
      index: "zh",
      src: "https://img.icons8.com/color/30/china.png",
      key: Math.random(),
    },
    {
      name: "ChineseTraditional",
      index: "zh_tw",
      src: "https://img.icons8.com/color/30/china.png",
      key: Math.random(),
    },
    {
      name: "Czech",
      index: "cs",
      src: "https://img.icons8.com/external-flat-icons-inmotus-design/30/external-czech-flags-flat-icons-inmotus-design.png",
      key: Math.random(),
    },
    {
      name: "Danish",
      index: "da",
      src: "https://img.icons8.com/color/30/denmark.png",
      key: Math.random(),
    },
    {
      name: "Finnish",
      index: "fi",
      src: "https://img.icons8.com/color/30/finland.png",
      key: Math.random(),
    },
    {
      name: "French",
      index: "fr",
      src: "https://img.icons8.com/color/30/france.png",
      key: Math.random(),
    },
    {
      name: "German",
      index: "de",
      src: "https://img.icons8.com/color/30/germany.png",
      key: Math.random(),
    },
    {
      name: "Greek",
      index: "el",
      src: "https://img.icons8.com/color/30/greece.png",
      key: Math.random(),
    },
    {
      name: "Hindi",
      index: "hi",
      src: "https://img.icons8.com/color/30/india.png",
      key: Math.random(),
    },
    {
      name: "Hungarian",
      index: "hu",
      src: "https://img.icons8.com/color/30/hungary.png",
      key: Math.random(),
    },
    {
      name: "Italian",
      index: "it",
      src: "https://img.icons8.com/color/30/italy.png",
      key: Math.random(),
    },
    {
      name: "Japanese",
      index: "ja",
      src: "https://img.icons8.com/color/30/japan.png",
      key: Math.random(),
    },
    {
      name: "Korean",
      index: "ko",
      src: "https://img.icons8.com/color/30/south-korea.png",
      key: Math.random(),
    },
    {
      name: "Mandarin",
      index: "zh_cmn",
      src: "https://img.icons8.com/color/30/china.png",
      key: Math.random(),
    },
    {
      name: "Polish",
      index: "pl",
      src: "https://img.icons8.com/color/30/poland.png",
      key: Math.random(),
    },
    {
      name: "Portuguese",
      index: "pt",
      src: "https://img.icons8.com/color/30/portugal.png",
      key: Math.random(),
    },
    {
      name: "Romanian",
      index: "ro",
      src: "https://img.icons8.com/color/30/romania.png",
      key: Math.random(),
    },
    {
      name: "Russian",
      index: "ru",
      src: "https://img.icons8.com/color/30/russian-federation.png",
      key: Math.random(),
    },
    {
      name: "Serbian",
      index: "sr",
      src: "https://img.icons8.com/color/30/serbia.png",
      key: Math.random(),
    },
    {
      name: "Spanish",
      index: "es",
      src: "https://img.icons8.com/color/30/spain.png",
      key: Math.random(),
    },
    {
      name: "Swedish",
      index: "sv",
      src: "https://img.icons8.com/color/30/sweden.png",
      key: Math.random(),
    },
    {
      name: "Ukrainian",
      index: "uk",
      src: "https://img.icons8.com/color/30/ukraine.png",
      key: Math.random(),
    },
    {
      name: "Vietnamese",
      index: "vi",
      src: "https://img.icons8.com/color/30/vietnam.png",
      key: Math.random(),
    },
    {
      name: "USA",
      index: "us",
      src: "https://img.icons8.com/color/30/usa.png",
      key: Math.random(),
    },
  ];

  useEffect(() => {
    setLocation(props.data);
  });

  useEffect(() => {
    setLanguage(lg);
  }, []);

  const handleKey = (event) => {
    if (event.key === "Enter") {
      props.func(search);
    }
  };

  const changeLanguage = () => {};

  const handleLanguage = () => {
    if (boolean === true) {
      setBoolean(false);
    } else if (boolean === false) setBoolean(true);
    console.log(boolean);
  };

  return (
    <div className="header">
      <img
        width="25"
        height="25"
        src="https://img.icons8.com/ios-filled/25/marker.png"
        alt="marker"
      />
      <div className="header-text">
        {location ? location.country : "NF"} | {location ? location.name : "NF"}
      </div>
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
        <div className="header-lg" onClick={handleKey}>
          <div className="lang">
            <img
              width="30"
              height="30"
              src={
                boolean === false
                  ? "https://img.icons8.com/color/30/usa.png"
                  : "https://img.icons8.com/ios/30/delete-sign--v1.png"
              }
              alt="usa"
              onClick={handleLanguage}
            />
          </div>
          <div className={"lang-all"}>
            {boolean && language
              ? language.map((el) => (
                  <img
                    className="lang-img"
                    width="30"
                    height="30"
                    src={el.src}
                    alt="usa"
                    key={el.key}
                    onClick={() =>
                      props.func(search ? search : "London", el.index)
                    }
                  />
                ))
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
