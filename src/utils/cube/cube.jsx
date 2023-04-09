import React, { useState } from "react";
import "./cube.style.css";

const Cube = ({ settingCube }) => {
  const [rotateY, setRotateY] = useState(0);
  const [rotateX, setRotateX] = useState(0);
  const [rotateZ, setRotateZ] = useState(0);
  const {
    frW,
    frH,
    frTraZ,
    frBc,
    topW,
    topH,
    topTraY,
    topRot,
    topBc,
    backW,
    backH,
    backTraZ,
    backBc,
    bsW,
    bsH,
    bsTraY,
    bsRot,
    bsBc,
    lefW,
    lefH,
    lefTraX,
    lefRot,
    lefBc,
    rigW,
    rigH,
    rigTraX,
    rigRot,
    rigBc,
  } = settingCube;
  const handleRotate = () => {
    setRotateY(rot => rot + 10);
    // setInterval(() => {
    // }, 20);
  };

  return (
    <div>
      <div className="cont">
        <div
          className="cube"
          style={{
            transform: `rotateY(${rotateY}deg) rotateX(${rotateX}deg) rotateZ(${rotateZ}deg)`,
          }}
        >
          <div
            className="face"
            style={{
              width: frW,
              height: frH,
              top: "130px",
              backgroundColor: frBc,
              transform: `translateZ(${frTraZ})`,
            }}
          >
            {/*front*/}
          </div>
          <div
            className="face name"
            style={{
              width: topW,
              height: topH,
              backgroundColor: topBc,
              transform: `translateY(${topTraY}) rotateX(${topRot})`,
            }}
          >
            {/*top*/}
            Jorge Castro
          </div>
          <div
            className="face"
            style={{
              width: backW,
              height: backH,
              top: "130px",
              backgroundColor: backBc,
              transform: `translateZ(${backTraZ})`,
            }}
          >
            {/*back*/}
          </div>
          <div
            className="face"
            style={{
              width: bsW,
              height: bsH,
              backgroundColor: bsBc,
              transform: `translateY(${bsTraY}) rotateX(${bsRot})`,
            }}
          >
            {/*base*/}
          </div>
          <div
            className="face"
            style={{
              width: lefW,
              height: lefH,
              top: "130px",
              backgroundColor: lefBc,
              transform: `translateX(${lefTraX}) rotateY(${lefRot})`,
            }}
          >
            {/*left*/}
          </div>
          <div
            className="face"
            style={{
              width: rigW,
              height: rigH,
              top: "130px",
              backgroundColor: rigBc,
              transform: `translateX(${rigTraX}) rotateY(${rigRot})`,
            }}
          >
            {/*right*/}
          </div>
        </div>
      </div>
      <button onClick={handleRotate}>rotate y</button>
      <button onClick={() => setRotateX(ele => ele - 10)}>rotate x</button>
      <button onClick={() => setRotateZ(ele => ele - 10)}>rotate z</button>
    </div>
  );
};

export default Cube;

/**
 *   const settingCube = {
    frW: "200px",
    frH: "50px",
    frTraZ: "150px",
    frBc: "#ffff0087", // <---
    topW: "200px",
    topH: "200px",
    topTraY: "30px",
    topRot: "90deg",
    topBc: "#ff00d987", // <---
    backW: "200px",
    backH: "50px",
    backTraZ: "-150px",
    backBc: "#ff00d987", // <---
    bsW: "200px",
    bsH: "200px",
    bsTraY: "80px",
    bsRot: "90deg",
    bsBc: "rgba(255, 255, 255, 0.774)", // <---
    lefW: "200px",
    lefH: "50px",
    lefTraX: "150px",
    lefRot: "90deg",
    lefBc: "#ff00d987", // <---
    rigW: "200px",
    rigH: "50px",
    rigTraX: "-150px",
    rigRot: "90deg",
    rigBc: "#006c6089", // <---
  };

 */
