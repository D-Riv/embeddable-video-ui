import React, { useRef, useEffect, useCallback, useState } from "react";
import { httpRequest } from "../core.utils";
import { API, DEFAULT } from "../core.config";
import { withStyles, makeStyles, fade } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

import Paper1 from "./Paper1";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#000000",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  form: {
    padding: "2rem 5rem",
    display: "flex",
    flexDirection: "column",
  },
  formButton: {
    margin: "2rem",
    color: "#ffffff",
    backgroundColor: "#000000",
    width: "5rem",
  },
  tableContainer: {
    display: "flex",
    justifyContent: "center",
  },
  tableData: {
    width: "60rem",
  },
}));

const Home = () => {
  const classes = useStyles();

  const [activeConferences, setActiveConferences] = useState([]);
  const [inactiveConferences, setInactiveConferences] = useState([]);
  const [conferenceData, setConferenceData] = useState({
    name: "",
    room_type: "",
    permanentRoom: true,
    accessType: 1,
    id: null,
  });
  const [sessionUrl, setSessionUrl] = useState("");

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

  const fetchInactiveConferences = useCallback(async () => {
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
          status: "inactive",
        },
      });
      setInactiveConferences(response.data.active_conferences);
      // console.log(response.data.active_conferences);
    } catch (err) {
      console.error("API Call Failed: ", err);
    }
  }, []);

  useEffect(() => {
    fetchActiveConferences();
    fetchInactiveConferences();
  }, [conferenceData, fetchActiveConferences, fetchInactiveConferences]);

  const addNewConferences = async (item) => {
    try {
      const response = await httpRequest({
        endpoint: API.GET_CONFERENCES,
        method: "POST",
        headers: {
          "X-Api-Key": DEFAULT.AUTH_TOKEN,
        },
        // data: {},
        params: {
          name: conferenceData.name,
          room_type: conferenceData.room_type,
          // permanent_room: conferenceData.permanentRoom,
          permanent_room: "true",
          access_type: 1,

          // access_type: conferenceData.accessType,
          // name: item,
          // room_type: "meeting",
          // permanent_room: "true",
          // access_type: 1,
        },
      });
      fetchActiveConferences();

      // window.location.reload();
      // setInactiveConferences(response.data.active_conferences);
      // console.log(response.data.room.embed_room_url);
      // setUrl(response.data.room.embed_room_url);
    } catch (err) {
      console.error("API Call Failed: ", err);
    }
  };

  const addbatch = () => {
    setConferenceData({
      name: "",
      room_type: "",
    });
    const sessionArr = ["session1", "session2", "session3", "session4"];

    sessionArr.forEach((item) => {
      addNewConferences(item);
    });
  };

  const deleteConference = async () => {
    try {
      const response = await httpRequest({
        endpoint: `${API.GET_CONFERENCES}/${conferenceData.id}`,
        method: "DELETE",
        headers: {
          "X-Api-Key": DEFAULT.AUTH_TOKEN,
        },
        // data: {},
        // params: {
        //   room_id: 4904249,
        // },
      });
      console.log(response.data);
      fetchActiveConferences();
    } catch (err) {
      console.error("API Call Failed: ", err);
    }
  };

  const handleFormSubmit = (e) => {
    // console.log(e.target.name);

    setConferenceData({
      ...conferenceData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    activeConferences.forEach((item) => {
      if (
        conferenceData.paper === "Session1" &&
        conferenceData.name === item.name
      ) {
        setSessionUrl(item.embed_room_url);
      }
    });
  }, [activeConferences, conferenceData]);
  // console.log(conferenceData.session);
  // console.log(activeConferences[0].data.embed_room_url);

  return (
    <div>
      <h1>View Active Sessions</h1>

      <div className={classes.tableContainer}>
        <TableContainer component={Paper} className={classes.tableData}>
          <Table aria-label="customized table" className={classes.tableData}>
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Status</StyledTableCell>
                <StyledTableCell align="center">Id</StyledTableCell>
                <StyledTableCell align="center">Name</StyledTableCell>
                <StyledTableCell align="center">Room Url</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {activeConferences.map((item) => {
                return (
                  <StyledTableRow key={item.patient_firstname}>
                    <StyledTableCell align="center" className="cell-msg">
                      {item.status}
                    </StyledTableCell>
                    <StyledTableCell align="center" className="cell-msg">
                      {item.id}
                    </StyledTableCell>
                    <StyledTableCell align="center" className="cell-msg">
                      {item.name}
                    </StyledTableCell>
                    <StyledTableCell align="center" className="cell-msg">
                      {item.room_url}
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {/* <h1>View InActive Meetings</h1>
        <TableContainer component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Status</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {inactiveConferences.map((item) => {
                return (
                  <StyledTableRow key={item.patient_firstname}>
                    <StyledTableCell align="center" className="cell-msg">
                      {item.status}
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer> */}
      <Paper>
        <form noValidate autoComplete="off" className={classes.form}>
          <h1>Add new meeting session</h1>
          <TextField
            id="1"
            label="Room name"
            variant="outlined"
            helperText="name of the room that will be visible to attendees. "
            name="name"
            onChange={handleFormSubmit}
          />
          <TextField
            id="2"
            label="Room type"
            variant="outlined"
            helperText="meeting or webinar"
            name="room_type"
            onChange={handleFormSubmit}
          />
          {/* <TextField
              id="3"
              label="Permanent room"
              variant="outlined"
              helperText="this value determines whether you create a one-time scheduled meeting or a permanent (endless) conference room.
                          false	one-time scheduled meeting.
                          true	permanent event."
              name="permanentRoom"
              onChange={handleFormSubmit}
            /> */}
          {/* <TextField
              id="4"
              label="Access type"
              variant="outlined"
              helperText="
                        1	describes open access room, not protected by password or token. 
                        2	password protected, access to the conference room granted based on password provided in advance.
                        3	token protected, each invitee receives a unique token that grants access to the conference room. Access token is single-use, so it can be used only once by one person."
              name="accessType"
              onChange={handleFormSubmit}
            /> */}
          {/* <TextField
            id="5"
            label="Session"
            variant="outlined"
            helperText="Post to Session1 or Session2"
            name="Paper"
            onChange={handleFormSubmit}
          /> */}
        </form>
        <div>
          <button onClick={addNewConferences} className={classes.formButton}>
            Add single meeting session
          </button>
          <button onClick={addbatch} className={classes.formButton}>
            Batch create meeting sessions
          </button>
        </div>
        <form noValidate autoComplete="off" className={classes.form}>
          <h1>Delete meeting</h1>
          <TextField
            id="6"
            label="Room Id"
            variant="outlined"
            helperText="Room Id"
            name="id"
            onChange={handleFormSubmit}
          />
        </form>
        <div>
          <button onClick={deleteConference} className={classes.formButton}>
            Delete meeting
          </button>
        </div>
      </Paper>
      {/* <Paper1 paper1Src={sessionUrl} /> */}
    </div>
  );
};

export default Home;
