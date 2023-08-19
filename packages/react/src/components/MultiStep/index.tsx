import { Label, MultiStepContainer, Step, Steps } from './styles'
import React from 'react'

export interface MultiStepProps {
  size: number
  currentStep?: number
}

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  const array = []
  for (let i = 0; i < size; i++) {
    array.push(i)
  }
  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {size}
      </Label>

      <Steps css={{ '--steps-size': size }}>
        {array.map((step) => {
          return <Step key={step} active={currentStep > step ?? true} />
        })}
        {/* {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return <Step key={step} />
        })} */}
      </Steps>
    </MultiStepContainer>
  )
}

MultiStep.displayName = 'MultiStep'
