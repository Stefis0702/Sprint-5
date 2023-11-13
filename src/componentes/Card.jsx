import styled from "styled-components";

function Card({ currentCardData, nextStep, prevStep, isLastStep, isFirstStep  }) {
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
const ButtonStyles = styled.button`
  
color: black;
padding: 10px;
border: 1px solid #222;
border-radius: 50px;
cursor: pointer;
width: fit-content;
margin-right: 8px; 
margin-top: 10px; 
align-self: flex-end; 

`;

const TextContainer = styled.div`
flex-grow:1 ; // Hace que este contenedor ocupe el espacio disponible
text-align:  start;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const CardBody = styled.div`
ddisplay: flex;
flex-direction: column;
position: relative;
background-color: white;
padding: 20px 25px;
border-radius: 0 0 30px 30px;
justify-content: space-between;
align-items: center; // Alinea los elementos verticalmente

@media (min-width: 768px) {
  flex-direction: row; 
  align-items: flex-start; 
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
    <ResponsiveCardStyles >
    <ImageStyles bgColor={currentCardData.bgColor}>
        <img src={currentCardData.image}  />
      </ImageStyles>
      <CardBody>
        <TextContainer>
        <h2>{currentCardData.title}</h2>
        <p>{currentCardData.description}</p>
        </TextContainer>
        <ButtonContainer>
        {isFirstStep ? (
          <ButtonStyles onClick={nextStep}>{"→"}</ButtonStyles>
        ) : (
          <>
            <ButtonStyles onClick={prevStep}>{"←"}</ButtonStyles>
            {isLastStep ? null : (
              <ButtonStyles onClick={nextStep}>{"→"}</ButtonStyles>
            )}
          </>
        )}
      </ButtonContainer>
      </CardBody>
  </ResponsiveCardStyles>
  );
}

export default Card;