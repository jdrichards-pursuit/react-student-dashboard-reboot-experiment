import { makePercent, useEmoji, greenYellowRed } from "../helpers";
import "./StudentInfo.css";

const StudentInfo = (props) => {
  const {
    codewars: {
      current: { total: currTotal, lastWeek: currLastWeek },
      goal: { total: gTotal }
    },
    cohort: {
      scores: { assignments, projects, assessments }
    },
    certifications: { resume, linkedin, github, mockInterview }
  } = props;

  const checkPercent = makePercent(+currTotal / +gTotal);

  return (
    <div className="student-info-container">
      <section>
        <h3>Codewars</h3>
        <p>Current Total: {currTotal}</p>
        <p>Last Week: {currLastWeek}</p>
        <p>Goal: {gTotal}</p>
        <p>
          Percent of Goal Achieved:
          <span style={{ color: greenYellowRed(checkPercent) }}>
            &nbsp;{checkPercent}%
          </span>
        </p>
      </section>
      <section>
        <h3>Scores</h3>
        <p>Assignments: {makePercent(assignments)}%</p>
        <p>Projects: {makePercent(projects)}%</p>
        <p>Assessments: {makePercent(assessments)}%</p>
      </section>
      <section>
        <h3>Certifications</h3>
        <p>Resume: {useEmoji(resume)}</p>
        {console.log(resume)}
        <p>LinkeIn: {useEmoji(linkedin)}</p>
        <p>Mock Interview: {useEmoji(github)}</p>
        <p>Github: {useEmoji(mockInterview)}</p>
      </section>
    </div>
  );
};
export default StudentInfo;
