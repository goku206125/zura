import useSWR from "swr";
const fetcher = (url) => fetch(url).then(res => res.json());

export default function QuotesPage() {
  const { data: quotes, error } = useSWR("/api/quotes", fetcher);

  if (error) return <div>Error loading quotes</div>;
  if (!quotes) return <div>Loading…</div>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Quotes</h1>
      <ul className="list-disc pl-6 space-y-2">
        {quotes.map(q => <li key={q.id}>{q.text}</li>)}
      </ul>
    </div>
  );
}
