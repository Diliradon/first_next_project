import { notFound } from 'next/navigation';

function getRandomInt (count: number) {
  return Math.floor(Math.random() * count);
}

export default function ReviewDetail ({
  params
}: {
  params: {
    productId: string;
    reviewId: string;
  }
}) {
  const number = getRandomInt(2);
  if (number === 1) {
    throw new Error('Error message review')
  }
  if (parseInt(params.reviewId) > 1000) {
    notFound(); 
  }
 return (
  <h1>Review {params.productId} for product {params.reviewId}</h1>
 )
}