import React, { useContext } from "react";
import Context from "../context/Context";

const Main = () => {
  const { state } = useContext(Context);

  return (
    <div className="dy center column main">
      <div className="dy center-w shell" id="sec1">
        <div //
          className={`dy relative center-h ${
            state ? `section-1` : `section-1-h`
          } `}
        >
          <div className="section-1-name">
            <div className="dy center-w column name-m">
              <div>Hi, my</div>
              <div>
                name is <span className="my-name">Jorge.</span>
              </div>
            </div>
            <div className="dy center information-m">
              I'm Jorge Castro a interactive front-end and back-end developer
              from Mexico.
            </div>
            {/* <a href="#saaas" className="relative t-3">
              section
            </a> */}
          </div>
        </div>
      </div>
      <div className="dy center shell test" id="saaas">
        <div
          className={`dy relative center column ${
            state ? `section-2` : `section-2-h`
          }`}
        >
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
            eum recusandae mollitia accusantium quae eius doloribus iusto qui
            amet, repudiandae illum consequatur ullam, natus assumenda velit,
            quos accusamus laudantium necessitatibus.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
            eum recusandae mollitia accusantium quae eius doloribus iusto qui
            amet, repudiandae illum consequatur ullam, natus assumenda velit,
            quos accusamus laudantium necessitatibus.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
            eum recusandae mollitia accusantium quae eius doloribus iusto qui
            amet, repudiandae illum consequatur ullam, natus assumenda velit,
            quos accusamus laudantium necessitatibus.
          </p>
          <a href="#sec3">section</a>
        </div>
      </div>
      <div className="dy center shell" id="sec3">
        <div className="test-1">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            eligendi? Rerum dolore cupiditate dolorum reprehenderit similique
            voluptatem delectus cumque soluta adipisci alias exercitationem
            architecto eveniet consectetur totam, officia mollitia culpa?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            eligendi? Rerum dolore cupiditate dolorum reprehenderit similique
            voluptatem delectus cumque soluta adipisci alias exercitationem
            architecto eveniet consectetur totam, officia mollitia culpa?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            eligendi? Rerum dolore cupiditate dolorum reprehenderit similique
            voluptatem delectus cumque soluta adipisci alias exercitationem
            architecto eveniet consectetur totam, officia mollitia culpa?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            eligendi? Rerum dolore cupiditate dolorum reprehenderit similique
            voluptatem delectus cumque soluta adipisci alias exercitationem
            architecto eveniet consectetur totam, officia mollitia culpa?
          </p>
          <a href="#sec1">section</a>
        </div>
      </div>
    </div>
  );
};

export default Main;
