import useSWR from "swr";
const fetcher = (url) => fetch(url).then(res => res.json());

export default function VideosPage() {
  const { data: videos, error } = useSWR("/api/videos", fetcher);
  if (error) return <div>Error</div>;
  if (!videos) return <div>Loading…</div>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Videos</h1>
      <div className="space-y-4">
        {videos.map(v => (
          <div key={v.id}>
            <h2 className="font-semibold">{v.title}</h2>
            <iframe className="w-full h-64" src={v.url} />
          </div>
        ))}
      </div>
    </div>
  );
}
