import React, {
  useRef,
  useEffect,
  useCallback,
  useContext,
  useState,
} from "react";
import { SessionUrl } from "../App";
import PropTypes from "prop-types";

import { httpRequest } from "../core.utils";
import { API, DEFAULT } from "../core.config";
import Iframe from "./Iframe";

import "./Paper1.css";

const Paper1 = ({ paper1Src }) => {
  const { session1 } = useContext(SessionUrl);

  const [activeConferences, setActiveConferences] = useState([]);

  const fetchActiveConferences = useCallback(async () => {
    try {
      const response = await httpRequest({
        endpoint: API.GET_CONFERENCES,
        method: "GET",
        headers: {
          "X-Api-Key": DEFAULT.AUTH_TOKEN,
        },
        // data: {
        //   data: {
        //     facility_id: 9804,
        //   },
        // },
        params: {
          status: "active",
        },
      });
      setActiveConferences(response.data.active_conferences);
      console.log(response.data.active_conferences);
    } catch (err) {
      console.error("API Call Failed: ", err);
    }
  }, []);

  useEffect(() => {
    fetchActiveConferences();
  }, [fetchActiveConferences]);

  const urlArr = [];
  activeConferences.forEach((item) => {
    // console.log(item.embed_room_url);
    urlArr.push(item.embed_room_url);
  });
  console.log(urlArr);

  // useEffect(() => {
  //   const script = document.createElement("script");

  //   script.src =
  //     "https://embed.clickmeeting.com/embed_conference.html?r=1716023574856678";
  //   // script.src = urlArr[0];
  //   script.async = true;
  //   script.setAttribute("type", "text/javascript");
  //   script.setAttribute("id", "tag-contained");

  //   document.body.appendChild(script);
  //   // document.getElementById("divtag").appendChild(script);
  //   // document.iframe.appendChild(script);
  //   // return () => {
  //   //   document.getElementById("divtag").removeChild(script);
  //   // };
  // }, []);
  // <iframe
  //   id="clickmeetingFlashroomIframe"
  //   src="https://dennisrivera654.clickmeeting.com/164629284?popup=off&amp;lang=en&amp;xlang=en"
  //   frameborder="0"
  //   allow="microphone; camera; fullscreen; autoplay"
  //   width="1024"
  //   height="768"
  //   style="border: none; display: block;"
  // ></iframe>

  return (
    <div id="divtag">
      {/* <iframe></iframe> */}
      {/* <Iframe /> */}
      <iframe
        title="Click Meeting"
        width="500"
        height="500"
        allow="microphone"
        src="https://dennisrivera654.clickmeeting.com/model_reduction_by_moment_matching__beyond_linearity_-_a_review_of_the_last_10_years?popup=off&amp;lang=en&amp;xlang=en"
        frameborder="0"
        allowFullScreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
      ></iframe>
    </div>
  );
};

Paper1.propTypes = {
  paper1Src: PropTypes.object,
};

export default Paper1;
