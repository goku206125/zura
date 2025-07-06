import useSWR from "swr";
import { useState } from "react";
const fetcher = (url) => fetch(url).then(res => res.json());

export default function GamesPage() {
  const { data: qs, error } = useSWR("/api/questions", fetcher);
  const [index, setIndex] = useState(0);
  const [result, setResult] = useState<string|null>(null);

  if (error) return <div>Error</div>;
  if (!qs) return <div>Loading…</div>;

  const q = qs[index];
  const handle = (i) => {
    setResult(i === q.answer ? "Correct!" : "Wrong!");
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">MCQ Game</h1>
      <p className="mb-4">{q.text}</p>
      {q.options.map((opt, i) => (
        <button key={i}
          className="block mb-2 p-2 border rounded w-full text-left hover:bg-gray-100"
          onClick={() => handle(i)}
        >{opt}</button>
      ))}
      {result && <p className="mt-4 font-semibold">{result}</p>}
      <button className="mt-4 underline" onClick={() => { setIndex((index+1)%qs.length); setResult(null); }}>
        Next Question
      </button>
    </div>
  );
}
