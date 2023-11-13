import Card from './componentes/Card'
import { useState } from 'react';


function App() {

  
  const tutorialData=[
    {
      title: "Dedica moltes hores",
      description: "Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.",
      bgColor: "#2a9d8f",
      image: "./src/image/time_managment.svg",
    },
    {
      title: "Programa projectes propis",
      description: "Més val 10 hores treballant en projectes propis que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.",
      bgColor: "#adb5bd",
      image: "./src/image/programming.svg",
    },
    {
      title: "Procura descansar",
      description: "Descansar bé i desconnectar són vitals. D'aquesta manera reduiràs l'estrès i l'ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge.",
      bgColor: "#ffc300",
      image: "./src/image/meditation.svg",
    }
  ];
  const [step,setStep] = useState(0);
  const currentCardData=tutorialData[step];
  
  function nextStep(){
    if (step<tutorialData.length-1){
      setStep(prev=>prev + 1)
  };
 }
 function prevStep() {
  if (step > 0) {
    setStep((prev) => prev - 1);
  }
}
const totalSteps= tutorialData.length;
  return (
    
    <>
      <Card
        currentCardData={currentCardData}
        nextStep={nextStep}
        prevStep={prevStep}
        isLastStep={step === tutorialData.length - 1}
        isFirstStep={step === 0}
      />
    </>
  );

}


 
export default App
