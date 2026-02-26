export default function Statistic({ courseResults }) {
  const scores = courseResults.map(student => student.score);
  
  const average = (scores.reduce((sum, score) => sum + score, 0) / scores.length).toFixed(0);
  const min = Math.min(...scores);
  const max = Math.max(...scores);

  return (
    <div className="statistic">
      <div className="stat">
        <span className="label">AVERAGE</span>
        <span className="value">{average}</span>
      </div>
      <div className="stat">
        <span className="label">MIN</span>
        <span className="value">{min}</span>
      </div>
      <div className="stat">
        <span className="label">MAX</span>
        <span className="value">{max}</span>
      </div>
    </div>
  );
}
