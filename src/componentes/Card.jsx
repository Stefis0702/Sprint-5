

function Card ({ title, description,nextStep }) {
  return(
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={nextStep}></button>
    </div>
  );
}

export default Card;