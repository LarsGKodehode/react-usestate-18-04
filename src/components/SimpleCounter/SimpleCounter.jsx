import { useState } from "react"

export function SimpleCounter(props) {
  const { count } = props

  // For å lagre en tilstand i React bruker vi useState hooken
  // Den tar et argument som er start verdien
  // og du får tilbake et array hvor
  // første element er tilstanden
  // andre element er en funksjon for å oppdatere den
  const [state, setState] = useState(count)

  // Det er veldig enkelt å sette en konkret verdi
  // Bare kall funksjonenn du får tilbake med den verdien
  function reset() {
    setState(0)
  }

  // Skal du bruke en eller annen tilstand til beregningen
  // Så bør du gi den en callback funksjon
  function increment() {
    setState(
      (previousState) => previousState + 3
    )
  }

  // En grei konvensjon å følge er å holde
  // retur delen av komponenten så 'ren'
  // for logikk som overhode mulig
  // ie. definer funksjoner som ^over^ og
  // gi onXXXX en referanse slik som vi har gjort her
  return (
    <div>
      <h1>Count: {state}</h1>
      <button onClick={increment}>+3</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}