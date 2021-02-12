import React, { useRef, useEffect, useCallback } from "react";
import { httpRequest } from "../core.utils";
import { API, DEFAULT } from "../core.config";

const Iframe = () => {
  // const iFrameRef = useRef();

  // const meetingBody = {
  //   topic: "Embbnux Ji's Meeting",
  //   meetingType: "Scheduled",
  //   password: "",
  //   schedule: {
  //     startTime: 1583312400368,
  //     durationInMinutes: 60,
  //     timeZone: {
  //       id: "1",
  //     },
  //   },
  //   allowJoinBeforeHost: false,
  //   startHostVideo: false,
  //   startParticipantsVideo: false,
  //   audioOptions: ["Phone", "ComputerAudio"],
  // };

  // useEffect(() => {
  //   // send a request to schedule meeting
  //   const requestId = Date.now().toString();
  //   iFrameRef.current.contentWindow.postMessage(
  //     {
  //       type: "rc-adapter-message-request",
  //       requestId: requestId,
  //       path: "/schedule-meeting",
  //       body: meetingBody,
  //     },
  //     "*"
  //   );

  //   // listen response
  //   window.addEventListener("message", function (e) {
  //     var data = e.data;
  //     if (data && data.type === "rc-adapter-message-response") {
  //       if (data.responseId === requestId) {
  //         console.log(data.response);
  //       }
  //     }
  //   });
  // });

  // useEffect(() => {
  //   const script = document.createElement("script");

  //   script.src =
  //     "https://embed.clickmeeting.com/embed_conference.html?r=1716023574824560&w=700&h=700";
  //   script.async = true;
  //   script.setAttribute("type", "text/javascript");

  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  // const fetchConferences = useCallback(async () => {
  //   try {
  //     const response = await httpRequest({
  //       endpoint: API.GET_CONFERENCES,
  //       method: "GET",
  //       headers: {
  //         "X-Api-Key": DEFAULT.AUTH_TOKEN,
  //       },
  //       // data: {
  //       //   data: {
  //       //     facility_id: 9804,
  //       //   },
  //       // },
  //       params: {
  //         status: "active",
  //       },
  //     });
  //     console.log(response);
  //   } catch (err) {
  //     console.error("API Call Failed: ", err);
  //   }
  // }, []);

  // useEffect(() => {
  //   fetchConferences();
  // }, [fetchConferences]);

  return (
    <div className="thistest">
      {/* <div id="scriptTarget" />
      <div className="main"></div> */}
      {/* <iframe
        title="test"
        id="clickmeetingFlashroomIframe"
        src="https://dennisrivera654.clickmeeting.com/1716023574817809?popup=off&amp;lang=en&amp;xlang=en"
        frameborder="0"
        allow="microphone; camera; fullscreen; autoplay"
        width="1024"
        height="768"
        // style="border: none; display: block;"
      ></iframe> */}
      {/* <iframe
        title="clickmeetindg"
        id="clickmeetingFlashroomIframe"
        src="https://dennisrivera654.clickmeeting.com/966338358?popup=off&amp;lang=en&amp;xlang=en"
        frameborder="0"
        allow="microphone; camera; fullscreen; autoplay"
        width="500"
        height="500"
      ></iframe> */}
    </div>
    // <div>
    //   <iframe
    //     ref={iFrameRef}
    //     title="Ring Central Test"
    //     width="300"
    //     height="500"
    //     allow="microphone"
    //     src="https://ringcentral.github.io/ringcentral-embeddable/app.html?clientId=SJ6btmydSDusZd_UTDlaHA&appServer=	https://platform.devtest.ringcentral.com&disableGlip=false"
    //   ></iframe>
    // </div>
  );
};

export default Iframe;
