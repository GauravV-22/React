import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProblemDetail() {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/problems?ID=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setQuestion(data[0]); 
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!question) return <p>Question not found.</p>;

  return (
    <div className="container">
      <h2>{question.title}</h2>
      <h4>Question</h4>
      <p> {question.description}</p>

      <h4>Test Cases:</h4>
      <ul>
        {question.test_cases?.map((input, index) => (
          <li key={index}>{input}</li>
        ))}
      </ul>

      <h4>Output:</h4>
      <ul>
        {question.output?.map((out, index) => (
          <li key={index}>{out}</li>
        ))}
      </ul>

      <h4>Submitted Test Cases:</h4>
      <ul>
        {question.submit_test_cases?.map((input, index) => (
          <li key={index}>{input}</li>
        ))}
      </ul>

      <h4>Submitted Output:</h4>
      <ul>
        {question.submit_output?.map((out, index) => (
          <li key={index}>{out}</li>
        ))}
      </ul>

      <h4>Status:</h4>
      <p>{question.status ? " Passed" : "Not Passed"}</p>

      <Link to="/" className="back-link">← Back to Dashboard</Link>
    </div>
  );
}
