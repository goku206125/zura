import Link from "next/link";

export default function Home() {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-4xl font-bold">Zura’s Corner</h1>
      <ul className="space-y-2 text-blue-600 underline">
        <li><Link href="/quotes">Quotes</Link></li>
        <li><Link href="/videos">Videos</Link></li>
        <li><Link href="/games">MCQ Game</Link></li>
      </ul>
    </div>
  );
}
