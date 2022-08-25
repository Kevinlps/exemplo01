import { useState } from "react"
import CharacterCounter from "./components/CharacterCounter"

const App = () => {
  const [phrase, setPhrase] = useState('')

  return <CharacterCounter sentence={phrase} setSentence={setPhrase}/>
}
export default App