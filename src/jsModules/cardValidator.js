import valid from "card-validator"

export const isNumberValid = (num, inputError) => {
  // const cardType = valid.creditCardType(num)
  const isValid = valid.number(num.toString())

  if (!isValid.isPotentiallyValid) {
    // renderInvalidCardNumber();
    document.querySelector('.parentOfCardNum').append(inputError)
  }

  if (isValid.card) {
    console.log(isValid.card.type); // 'visa'
  }
  return {isValid}
}

