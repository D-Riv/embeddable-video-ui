import React, { useEffect } from "react";
import Iframe from "./Iframe";

const Paper2 = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://embed.clickmeeting.com/embed_conference.html?r=1716023574856744";
    script.async = true;
    script.setAttribute("type", "text/javascript");

    document.getElementById("divtag2").appendChild(script);

    // return () => {
    //   document.getElementById("divtag").removeChild(script);
    // };
  }, []);

  return (
    <div id="divtag2">
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

export default Paper2;
