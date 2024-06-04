import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <h1>Welcome to Home Page</h1>

      <Link href="/say-hello">Say hello</Link>
      <Link href="/dashboard">Dashboard</Link>
    </>
  );
}