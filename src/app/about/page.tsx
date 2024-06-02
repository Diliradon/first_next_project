import Link from "next/link"

export const metadata = {
  title: 'About Me',
}

export default function About() {
  return (
    <>
      <h1>About me</h1> 

      <Link href="/blog">Blog</Link>

    </>
  )
}