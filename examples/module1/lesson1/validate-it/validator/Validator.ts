import {
  INPUT_EMPTY_OR_NO_INT,
  INVALID_NUMBER,
  VALID_NUMBER,
} from './messages';

export class Validator {
  private hasValue = (value: unknown) => {
    return value !== null && value !== undefined && value !== '';
  };

  private isInteger = (value: unknown) => {
    return Number.isInteger(value);
  };

  private isMoreThan = (value: number, boundary: number) => {
    if (value > boundary) return true;

    return false;
  };

  private isLessThan = (value: number, boundary: number) => {
    if (value < boundary) return true;

    return false;
  };

  private isEven = (value: number) => {
    if (value % 2 === 0) return true;

    return false;
  };

  public validate = (value: unknown): string => {
    if (!this.hasValue(value) || !this.isInteger(value)) {
      return INPUT_EMPTY_OR_NO_INT;
    }

    const numValue = value as number;

    const isEven = this.isEven(numValue);
    const isPositive = this.isMoreThan(numValue, 0);
    const isLessThan100 = this.isLessThan(numValue, 100);

    if (!isEven || !isPositive || !isLessThan100) {
      return INVALID_NUMBER;
    }

    return VALID_NUMBER;
  };
}
