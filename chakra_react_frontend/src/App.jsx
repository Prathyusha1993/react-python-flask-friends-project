import { useState } from 'react'
import { Button } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello World</h1>
      <Button>Click me</Button>
    </>
  )
}

export default App
