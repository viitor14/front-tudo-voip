import {
  DivIconNavigation,
  DivNavigation,
  StepContainer,
  StepCircle,
  Line,
  StepTitle
} from './styled';

export default function IconNavigation({ currentStep }) {
  const steps = [
    { number: 1, title: 'Cliente' },
    { number: 2, title: 'Detalhes' },
    { number: 3, title: 'Revisão' }
  ];
  const getStatus = (stepNumber) => {
    if (stepNumber < currentStep) return 'completed';
    if (stepNumber === currentStep) return 'active';
    return 'inactive';
  };
  return (
    <DivIconNavigation>
      {steps.map((step, index) => (
        <DivNavigation key={step.number}>
          <StepContainer>
            <StepCircle status={getStatus(step.number)} data-text={step.number}>
              {step.number}
            </StepCircle>
            {/* Renderiza a linha <hr> apenas se não for o último item */}
            {index < steps.length - 1 && <Line />}
          </StepContainer>
          <StepTitle>{step.title}</StepTitle>
        </DivNavigation>
      ))}
    </DivIconNavigation>
  );
}
