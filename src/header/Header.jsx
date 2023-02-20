import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../context/Context";
import "./header.styles.css";

const Header = () => {
  const { state, dispatch } = useContext(Context);

  return (
    <div className="dy fixed header">
      <div className={`dy center ${state ? `box-v column` : `box-h row`}`}>
        <Link to="/" className="link dy center">
          main
        </Link>
        <Link to="/next" className="link dy center">
          next
        </Link>
        <Link to="/next-2" className="link dy center">
          next
        </Link>
        <button
          onClick={() =>
            dispatch({
              type: state ? "TRUE" : "FALSE",
              payload: { status: state ? false : true },
            })
          }
          className="btn"
        >
          change
        </button>
      </div>
    </div>
  );
};

export default Header;
