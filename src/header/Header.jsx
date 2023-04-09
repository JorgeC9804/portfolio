import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../context/Context";
import "./header.styles.css";

const Header = () => {
  const { state, dispatch } = useContext(Context);

  return (
    <section>
      <div className="header-h">
        <div className={`dy center row click-h`}>
          <Link to="/" className={`dy center link l-m-h`}>
            main
          </Link>
          <Link to="/next" className={`dy center link l-m-h`}>
            next
          </Link>
          <Link to="/next-2" className={`dy center link l-m-h`}>
            next 2
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
