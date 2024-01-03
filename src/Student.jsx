import './Student.css'

function setMonth(val) {
    let x = val.split('/');

    const date = new Date(Date.UTC(x[0], x[1], x[2]));

    let options = { month: 'long', day: 'numeric', year: 'numeric' };
    const y = new Intl.DateTimeFormat('en-US', options).format(date);
    return y;
}

export default function Student({ student }) {

    const { profilePhoto, preferredName, middleName, surname, username, dob } = student


    return (
        <li className="people">
            <img id="profilePics" src={profilePhoto} alt={preferredName} />
            <div id="describe" style={{}}>
                <p>
                    {preferredName} {middleName} {surname}
                </p>
                <p>{username}</p>
                <p>Birthday: {setMonth(dob)}</p>
            </div>
            {/* <p id="track">
                    {onTrackChecker(resume, linkedin, github, mockInterview)}
                </p> */}
            {/* <span onClick={() => setToggle(!toggle)} id="show">
                    {toggle ? "ShowLess...." : "Show More..."}
                </span> */}

            {/* {toggle && (
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
                )} */}
        </li>
    )
}