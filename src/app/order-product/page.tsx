"use client";

import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();

  const handeleClick = () => {
    console.log('Placing for you order');
    
    router.push("/");
  }

  return (
    <>
      <h1>Order Product</h1>
      <button onClick={handeleClick}>Pleace Order</button>
    </>
  )
}