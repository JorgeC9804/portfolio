import React, { useState, useContext, useEffect } from "react";
import Context from "../context/Context";
// import me from "../pictures/me.jpeg";
// import Cube from "../utils/cube/cube";
// import Test from "../test/Test";
import "./main.style.css";

const Main = () => {
  // const { state } = useContext(Context);
  const aux = "Hi, I´m Jorge Castro !".split("");
  let count = 0;
  const [hello, setHello] = useState("");

  /**
   * necesito renderizar solo una parte
   */

  const handleShow = () => {
    setHello("");
    const interval = setInterval(() => {
      console.log(aux[count]);
      console.log(count);
      count = count + 1;
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
    }, 5000);
  };

  useEffect(() => {
    handleShow();
  }, []);

  return (
    <div className="sec-main dy center">
      <div>
        <div className="dy center circle">
          <div className="dy center me">
            {/* <img src={me} alt="" className="img-me" /> */}
            {hello}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Main;
