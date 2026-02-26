import Header from "./components/Header";
import { JAVA_RESULTS, PYTHON_RESULTS, HTML_RESULTS, ENGLISH_RESULTS } from "./data";
import Score from "./components/Score.jsx";
function App() {
  return (
    <>
      <Header name="Student result for PNG batch 2026"/>

      <main className="scores-container">
        <Score courseName="Java" courseResults={JAVA_RESULTS}></Score>
        <Score courseName="HTML" courseResults={HTML_RESULTS}></Score>
        <Score courseName="Python" courseResults={PYTHON_RESULTS}></Score>
        <Score courseName="English" courseResults={ENGLISH_RESULTS}></Score>
      </main>
    </>
  );
}

export default App;
