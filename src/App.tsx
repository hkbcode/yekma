import styled from "styled-components"


const App = () => {
  
  return(

    <Wrapper>
        <Title> Hello Reactjs with TypeScript and Styled Components</Title>
    </Wrapper>

  )
}


const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  text-transform: capitalize;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;




export default App