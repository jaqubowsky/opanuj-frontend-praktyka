import { Validator } from './validator/Validator';

function main() {
  const valueInput = document.getElementById('input') as HTMLInputElement;
  const validateButton = document.getElementById('validation-btn');
  const clearButton = document.getElementById('cleanup-btn');
  const resultOutput = document.getElementById('result');

  const validator = new Validator();

  validateButton?.addEventListener('click', () => {
    if (!resultOutput) return;

    const result = validator.validate(parseFloat(valueInput.value));
    resultOutput.innerHTML = result;
  });

  clearButton?.addEventListener('click', () => {
    if (!valueInput) return;
    if (!resultOutput) return;

    valueInput.value = '';
    resultOutput.innerHTML = '';
  });
}

main();
