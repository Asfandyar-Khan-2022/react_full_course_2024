export default function App() {
  const ninjaTurtles = ['Leonardo', 'Donatello', 'Michelangelo', 'Raphael']
  const map1 = ninjaTurtles.map((turtle) => <p>{turtle}</p>)
  return (
    <main>
      {map1}
    </main>
  )
}