import styled from "styled-components";

function Card({ nextStep, currentCardData }) {
  const ImageStyles = styled.div`
  border: 1px solid #ddd;
  border-radius: 15px 15px 0 0;
  width: 100%;
  height: 60%;
  background-color: ${(props) => props.bgColor || "white"};
  
  img {
    width: 100%;
    height: 100%;
    
    border-radius: 15px 15px 0 0;
  }
`;

const CardStyles = styled.div`
  max-width: 350px;
  margin: 0 auto; // Centra el componente en la pantalla
  border: 1px solid #ddd;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  height: 700px;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: white;
  padding: 20px 25px;
  border-radius: 0 0 30px 30px;
`;

const ButtonStyles = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px ;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: fit-content;
  align-self: flex-end;

`;

  const mediaQuery = "@media (max-width: 768px)";

  const ResponsiveCardStyles = styled(CardStyles)`
    ${mediaQuery} {
      max-width: 100%; 
    }
  
    ${CardBody} {
      padding: 15px;
    }
  `;
  return (
    <CardStyles >
      <ImageStyles bgColor={currentCardData.bgColor}>
        <img src={currentCardData.image} alt="Card Image" />
      </ImageStyles>
      <CardBody>
        <h2>{currentCardData.title}</h2>
        <p>{currentCardData.description}</p>
        <ButtonStyles onClick={nextStep}>{"→"}</ButtonStyles>
      </CardBody>
    </CardStyles>
  );
}

export default Card;