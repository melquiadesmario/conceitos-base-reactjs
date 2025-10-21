import { useState } from "react"

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        { count }
      </button>
    </div>
  )
}
