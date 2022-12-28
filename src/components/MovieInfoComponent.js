import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: row;
padding: 20px 30px;
justify-content: center;
border-bottom: 1px solid lightgray;
`;

const CoverImage = styled.img`
object-fit: cover;
height: 352px;
`;

const InfoColumn = styled.div`
display: flex;
flex-direction: column;
margin: 20px;
`;
const MovieInfoComponent = (props) => {
    return(
        <Container>
        <CoverImage src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"/>
        <InfoColumn>
            
        </InfoColumn>
        </Container>
    )
}
export default MovieInfoComponent;