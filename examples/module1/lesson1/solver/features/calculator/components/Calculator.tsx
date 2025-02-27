import { VALID_OPERATIONS } from '../constants';
import { useCalculator } from '../hooks/useCalculator';
import { ActionButton } from './ActionButton';
import { NumberInput } from './NumberInput';

export function Calculator() {
  const {
    result,
    error,
    firstOperand,
    setFirstOperand,
    secondOperand,
    setSecondOperand,
    handleCalculate,
  } = useCalculator();

  const handleParseInputValue = (value: string): number => {
    return value === '' ? 0 : parseFloat(value);
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <NumberInput
          value={firstOperand}
          onChange={(e) =>
            setFirstOperand(handleParseInputValue(e.currentTarget.value))
          }
        />
        <NumberInput
          value={secondOperand}
          onChange={(e) =>
            setSecondOperand(handleParseInputValue(e.currentTarget.value))
          }
        />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        {VALID_OPERATIONS.map((operator) => {
          return (
            <ActionButton
              key={operator}
              onClick={() => handleCalculate(operator)}
            >
              {operator}
            </ActionButton>
          );
        })}
      </div>
      <div>Result: {result}</div>
      <div>{error}</div>
    </div>
  );
}
