import valid from 'card-validator';

export const cardValidator = (num, inputError) => {
  const isValid = valid.number(num.toString());
  const cardNumberBox = document.querySelector('.parentOfCardNum');

  if (!isValid.isPotentiallyValid) {
    // renderInvalidCardNumber();
    cardNumberBox.append(inputError);
  }
};
export default cardValidator;
