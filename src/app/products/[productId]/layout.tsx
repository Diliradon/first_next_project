function getRandomInt (count: number) {
  return Math.floor(Math.random() * count);
}

export default function ProductDetailsLayout({
  children
}: {
  children: React.ReactNode
}) {

  const number = getRandomInt(2);
  if (number === 1) {
    throw new Error('Error message for product')
  }

  return (
    <>
      {children}

      <h2>Features products</h2>
    </>
  )
}
