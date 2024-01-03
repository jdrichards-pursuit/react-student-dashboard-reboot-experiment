import { useState } from "react";
import StudentInfo from "./StudentInfo";
import Form from "./Form";
import { setMonth } from "../helpers";
import "./MainItem.css";

const onTrackChecker = (res, lin, git, mock) => {
  if (res && lin && git && mock) {
    return (
      <span style={{ display: "block", color: "green" }}>
        On track to Graduate
      </span>
    );
  } else {
    return null;
  }
};

// const breakDown = (c) => {
//   console.log('c', c);
//   let obj = {};
//   c.forEach((item) => (obj[item.id] = item));
//   return obj;
// };

const MainItem = (item, chosenCohort, setChosenCohort) => {
  console.log("item", item);
  const {
    profilePhoto,
    username,
    dob,
    id,
    names: { preferredName, middleName, surname },
    certifications: { resume, linkedin, github, mockInterview }
  } = item;

  const [toggle, setToggle] = useState(false);
  const [singleNote, setSingleNote] = useState({ commenter: "", comment: "" });
  const [theNotes, setTheNotes] = useState(
    JSON.parse(window.localStorage.getItem(id + "Notes")) || [...item.notes]
  );
  // const [theNotes, setNotes] = useState([...item.notes]);

  console.log(setChosenCohort);
  const handleSubmit = (e, id) => {
    e.preventDefault();
    if (singleNote.commenter === "" || singleNote.comment === "")
      return alert("Please Enter your name and a comment");

    // console.log(chosenCohort);
    // let x = breakDown(chosenCohort);
    // x[id].notes = [...x[id].notes, singleNote];
    // setChosenCohort(breakDown(chosenCohort));

    // console.log('addNote', x);

    setTheNotes([...theNotes, singleNote]);
    window.localStorage.setItem(
      id + "Notes",
      JSON.stringify([...theNotes, singleNote])
    );

    setSingleNote({ commenter: "", comment: "" });
  };

  return (
    <>
      <li className="people">
        <img id="profilePics" src={profilePhoto} alt={preferredName} />
        <div id="describe" style={{}}>
          <p>
            {preferredName} {middleName} {surname}
          </p>
          <p>{username}</p>
          <p>Birthday: {setMonth(dob)}</p>
        </div>
        <p id="track">
          {onTrackChecker(resume, linkedin, github, mockInterview)}
        </p>
        <span onClick={() => setToggle(!toggle)} id="show">
          {toggle ? "ShowLess...." : "Show More..."}
        </span>

        {toggle && (
          <div>
            <StudentInfo {...item} />

            <div id="notes">
              <h4>1:1 Notes</h4>
              <Form
                singleNote={singleNote}
                setSingleNote={setSingleNote}
                handleSubmit={handleSubmit}
              />

              {theNotes.length > 0 && <h5>Comments</h5>}
              <ul style={{ background: "#2b2828" }}>
                {theNotes.length > 0 &&
                  theNotes.map(({ commenter, comment }, id) => (
                    <li key={id} id="comment">
                      {commenter} says, {comment}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        )}
      </li>
    </>
  );
};

export default MainItem;
