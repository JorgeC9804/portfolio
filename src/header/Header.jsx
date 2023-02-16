import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.styles.css";

const Header = () => {
  const [change, setChange] = useState(false);

  return (
    <div className="dy fixed header">
      <div className={`dy center ${change ? `box-v column` : `box-h row`}`}>
        <Link to="/" className="link dy center">
          main
        </Link>
        <Link to="/next" className="link dy center">
          next
        </Link>
        <Link to="/next-2" className="link dy center">
          next
        </Link>
        <button onClick={() => setChange(set => !set)} className="btn">
          change
        </button>
      </div>
    </div>
  );
};

export default Header;
