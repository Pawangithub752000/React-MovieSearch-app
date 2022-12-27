import styled from 'styled-components'
import React, {useState}  from 'react'
import MovieComponent from "./components/MovieComponent"
const Container = styled.div`
display: grid;
fiex-direction: row;
`;

const Header = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between ;
background-color: black ;
color: white;
align-items: center;
padding: 10px;
font-size: 25px;
font-weight: bold;
box-shadow: 0 3px 6px 0 #555;

`;
const AppName = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;
const MovieImage = styled.img`
width: 48px;
height: 48px;
margin: 15px;
`;
const SearchBox = styled.div`
display: flex;
flex-direction: row;
padding: 10px; 10px;
background-color: white;
border-radius: 6px;
margin-left: 20px;
width: 50%;
background-color: white;
align-items: center;
`;
const SearchIcon = styled.img`
width: 32px
height: 32px;
`;
const SearchInput = styled.input`
color: black;
font-size: 16px;
font-weight: bold;
border: none;
outline: none;
margin-left: 15px;
`;
const MovieListContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
padding: 30px;
justify-content: space-evenly;
`

function App() {
  const [searchQuery, updateSearchQuery] = useState();
  const [timeoutId, updateTimeoutId] = useState();
  
  const onTextChange = (event) => {
  updateSearchQuery(event.target.value);
  const timeout = setTimeout(() => console.log("API call"), 500);
  updateTimeoutId(timeout);
  };
  return (
    <Container>
      <Header>
        <AppName>
          <MovieImage src="/movie-icon.svg" />
          React Movie App
        </AppName>
        <SearchBox>
          <SearchIcon src='/search-icon.svg' />
          <SearchInput placeholder="Search Movie" 
          value={searchQuery }
          onChange={onTextChange}
          />
        </SearchBox>
        </Header>
        <MovieListContainer>
        <MovieComponent />
        <MovieComponent />
        <MovieComponent />
        <MovieComponent />
        </MovieListContainer>
    </Container>
  );
}

export default App;
