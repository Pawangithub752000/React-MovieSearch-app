import styled from 'styled-components'
const Container = styled.div`
display: flex;
fiex-direction: column;
`;

const Header = styled.div`
display: flex;
flex-direction: row;
background-color: black;
color: white;
padding: 10px;
font-size: 25px;
font-weight: bold;
box-shadow: 0 3px 6px 0 #555;

`;
function App() {
  return (
    <Container>
      <Header>
     React Movie App
        </Header> Pawan prajapati
    </Container>
  );
}

export default App;
