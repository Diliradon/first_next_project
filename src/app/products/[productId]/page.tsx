import { Metadata } from 'next';
import Link from 'next/link';

interface Props {
  params: { productId: string }
}

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params.productId}`
  }
}

export default function ProductDetails({ params }: Props) {
  return (
    <>
      <h1>Product Details {params.productId}</h1> 
      <Link href='/'>Home</Link>
    </>
  )
}