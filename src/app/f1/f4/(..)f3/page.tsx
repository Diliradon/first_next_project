import Link from "next/link";

export default function InterceptedF3() {
  return (
    <>
      <h1>(..) Intercepted page F3</h1>
      <Link href="/f1/f2">F2</Link>
    </>
  )
}