import React, { useRef, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

import { httpRequest } from "../core.utils";
import { API, DEFAULT } from "../core.config";
import Iframe from "./Iframe";

const Paper1 = ({ paper1Src }) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://embed.clickmeeting.com/embed_conference.html?r=1716023574856678";
    script.async = true;
    script.setAttribute("type", "text/javascript");

    document.getElementById("divtag").appendChild(script);

    // return () => {
    //   document.getElementById("divtag").removeChild(script);
    // };
  }, []);

  return (
    <div id="divtag">
      {/* <Iframe /> */}
      {/* <iframe
        title="Click Meeting"
        width="300"
        height="500"
        allow="microphone"
        srcDoc="https://embed.clickmeeting.com/embed_conference.html?r=1716023574842252"
      ></iframe> */}
    </div>
  );
};

Paper1.propTypes = {
  paper1Src: PropTypes.object,
};

export default Paper1;
