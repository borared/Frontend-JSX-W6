
import Statistic from "./Statistic"
export default function Scores({ courseName, courseResults }) {
  function decideScore(score){
    return score < 50 ? "warning": "";
  }
  return (
    <div className="scores">
      <h1>{courseName}</h1>
      <table>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {courseResults.map((student, index) => (
            <tr key={index}>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td className={decideScore(student.score)}>
                {student.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
       <Statistic courseResults={courseResults} />
    </div>
  );
}
