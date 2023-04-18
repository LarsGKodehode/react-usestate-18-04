export function SearchList(props) {
  const { elements } = props

  return (
    <>
      <h3>Search List</h3>
      <ul>
        {elements.map(
          (term, index) => <li key={term + index}>{term}</li>
        )}
      </ul>
    </>
  )
}