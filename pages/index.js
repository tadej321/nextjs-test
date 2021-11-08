import styled from "styled-components";
import {Button} from "component-library-test"

export default function Home() {
  return (
    <>
      <Div>I am defined in the next.js app</Div>
      <Button/>
    </>
  )
}

const Div =  styled.div`
  color: red
`