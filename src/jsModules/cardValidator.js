import valid from "card-validator"

export const isNumberValid = (num) => {
  // const cardType = valid.creditCardType(num)
  const isValid = valid.number(num.toString())

  if (!isValid.isPotentiallyValid) {
    // renderInvalidCardNumber();
  }

  if (isValid.card) {
    console.log(isValid.card.type); // 'visa'
  }

  return {isValid, cardType}
}

