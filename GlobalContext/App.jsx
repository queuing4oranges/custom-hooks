import { useState } from 'react'
import { useGlobalContext } from './context'

function App() {
  const [count, setCount] = useState(0)
  const { name } = useGlobalContext()
  console.log(name);

  return (
    <>
      {/* render something here */}
    </>
  )
}

export default App
