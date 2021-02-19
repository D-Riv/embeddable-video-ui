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

  useEffect(() => {
    const script = document.createElement("script");

    // script.src =
    //   "https://embed.clickmeeting.com/embed_conference.html?r=1716023574856678";
    script.src = urlArr[0];
    script.async = true;
    script.setAttribute("type", "text/javascript");

    document.getElementById("divtag").appendChild(script);

    // return () => {
    //   document.getElementById("divtag").removeChild(script);
    // };
  }, [session1, urlArr]);

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
