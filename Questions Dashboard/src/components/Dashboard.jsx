import { useQuestions } from "../Hooks/useQuestions";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { questions, loading } = useQuestions();

  if (loading) return <p>Loading</p>;

  return (
    <div className="container">
      <h1>Questions</h1>
      <ul>
        {questions.map((q) => (
          <li key={q.ID}>
            <Link to={`/problem/${q.ID}`}>{q.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
