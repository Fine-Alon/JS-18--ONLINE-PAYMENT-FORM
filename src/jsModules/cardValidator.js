import valid from "card-validator"

 const isCardNumCorrect = (num) => {
    const isValid = valid.number(num.toString())
    return isValid.isValid
}

const cardValidator = (num, inputError) => {
    const isCardValid = isCardNumCorrect(num)
    const cardNumberBox = document.querySelector('.parentOfCardNum')

    if (!isCardValid) {
        cardNumberBox.append(inputError)
    }
}
export  {cardValidator,isCardNumCorrect}
