export const evaluateCondition = (values, condition) => {
  if (!condition || !values) return true;
  const { field, operator, value } = condition;
  const actualValue = parseFloat(values[field]);

  switch (operator) {
    case '>=':
      return actualValue >= value;
    case '<=':
      return actualValue <= value;
    case '==':
      return actualValue == value;
    case '!=':
      return actualValue != value;
    case '>':
      return actualValue > value;
    case '<':
      return actualValue < value;
    default:
      return true;
  }
};
