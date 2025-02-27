import { useState } from 'react';
import { OPERATIONS, type VALID_OPERATIONS } from '../constants';

type Operation = (typeof VALID_OPERATIONS)[number];

export const useCalculator = () => {
  const [firstOperand, setFirstOperand] = useState(0);
  const [secondOperand, setSecondOperand] = useState(0);

  const [result, setResult] = useState(0);
  const [error, setError] = useState('');

  const handleAdd = () => {
    const result = firstOperand + secondOperand;
    setResult(result);
  };

  const handleSubtract = () => {
    const result = firstOperand - secondOperand;
    setResult(result);
  };

  const handleMultiply = () => {
    const result = firstOperand * secondOperand;
    setResult(result);
  };

  const handleDivide = () => {
    if (secondOperand === 0) {
      setError('Cannot divide by zero');
      setResult(0);
      return;
    }

    const result = firstOperand / secondOperand;
    setResult(result);
  };

  const handleCalculate = (operator: Operation) => {
    setError('');

    switch (operator) {
      case OPERATIONS.ADD:
        handleAdd();
        break;
      case OPERATIONS.DIVIDE:
        handleDivide();
        break;
      case OPERATIONS.MULTIPLY:
        handleMultiply();
        break;
      case OPERATIONS.SUBSTRACT:
        handleSubtract();
        break;
      default:
        break;
    }
  };

  return {
    result,
    error,
    firstOperand,
    setFirstOperand,
    secondOperand,
    setSecondOperand,
    handleCalculate,
  };
};
