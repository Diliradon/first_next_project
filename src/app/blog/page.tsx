import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: '',
    default: 'Blog',
  },
}

export default function Blog () {
  return <h1>Blog</h1>
}