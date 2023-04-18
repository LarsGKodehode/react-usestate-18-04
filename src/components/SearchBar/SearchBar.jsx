import { useState } from "react"

export function SearchBar(props) {
  const { callback } = props

  const [searchString, setSearchString] = useState("")

  function handleChange(event) {
    setSearchString(event.target.value)
  }

  function submit(event) {
    // Sørger for at nettside ikke oppdateres
    event.preventDefault()
    // Sett tilstanden (state) i App komponenten
    callback(
      (prevTerms) => [...prevTerms, searchString]
    )
    // Sett søkefeltet til null
    setSearchString("")
  }

  return (
    <form onSubmit={submit}>
      <input type="text" placeholder="Search.." onChange={handleChange} value={searchString} />
      <button type="submit">Search</button>
    </form>
  )
}