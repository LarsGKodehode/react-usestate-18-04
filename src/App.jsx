import { useState } from "react"
import { SearchBar } from "./components/SearchBar/SearchBar"
import { SearchList } from "./components/SearchList/SearchList"
import { SimpleCounter } from "./components/SimpleCounter/SimpleCounter"

function App() {
  const [searchTerms, setSearchTerms] = useState(["First search", "Foo", "bar"])

  return (
    <div>
      <SimpleCounter count={10} />
      <SimpleCounter count={100} />

      {/* <SearchBar callback={setSearchTerms} />
      <SearchList elements={searchTerms} /> */}
    </div>
  )
}

export default App
