import React, { useState, createContext, useCallback, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import Paper1 from "./components/Paper1";
import Paper2 from "./components/Paper2";
import PageHeader from "./components/Header";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { httpRequest } from "./core.utils";
import { API, DEFAULT } from "./core.config";

export const SessionUrl = createContext();

function App() {
  const [conferenceData, setConferenceData] = useState([]);
  const [sessions, setSessions] = useState({
    session1: [0].embed_room_url,
    session2: [1].embed_room_url,
    session3: [2].embed_room_url,
    session4: [3].embed_room_url,
    session5: [4].embed_room_url,
    session6: [5].embed_room_url,
  });
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
      setConferenceData(response.data.active_conferences);
      console.log(response.data.active_conferences);
    } catch (err) {
      console.error("API Call Failed: ", err);
    }
  }, []);

  // const fetchInactiveConferences = useCallback(async () => {
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
  //         status: "inactive",
  //       },
  //     });
  //     setInactiveConferences(response.data.active_conferences);
  //     // console.log(response.data.active_conferences);
  //   } catch (err) {
  //     console.error("API Call Failed: ", err);
  //   }
  // }, []);

  useEffect(() => {
    fetchActiveConferences();
    // fetchInactiveConferences();
  }, [fetchActiveConferences]);

  console.log(conferenceData[0]);

  conferenceData.forEach((item) => {});

  return (
    <div className="App">
      <SessionUrl.Provider value={sessions}>
        <Router>
          <PageHeader />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/paper1" component={Paper1} />
            <Route exact path="/paper2" component={Paper2} />
          </Switch>
        </Router>
      </SessionUrl.Provider>
    </div>
  );
}

export default App;
