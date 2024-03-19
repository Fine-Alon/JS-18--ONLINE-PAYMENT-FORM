import {el, setChildren} from "redom";
import {isNumberValid} from "./cardValidator.js";
import Inputmask from "inputmask"
import {getCurrentMonthNumber, getCurrentYear} from "../helpers/getDate";

export const PaymentForm = () => {
  const form = el('form.p-3.w-50', {class: 'payment-form'})
  const cardNumberInput = el('div.mb-3', el('input.w-75', {type: 'text', placeholder: 'Card Number', required: true}))
  const expirationInput = el('input.w-25.me-3', {type: 'text', placeholder: 'MM/YY', required: true})
  const cvcInput = el('input.w-25', {type: 'text', placeholder: 'CVC/CVV', required: true})
  const emailInput = el('div.mb-3', el('input', {type: 'email', placeholder: 'Email', required: true}))
  const submitButton = el('div.mb-3', el('button.btn.btn-secondary.w-25', {type: 'submit'}, 'Pay'))
  const numberField = cardNumberInput.querySelector('input');

  const inputDateError = el('p.text-danger', 'Error: Year or month is before current date')

  expirationInput.addEventListener('blur', (e) => {
    const currentMonth = getCurrentMonthNumber()
    const currentYear = getCurrentYear()
    let inputtedMonth = e.target.value.slice(0, 2)
    const inputtedYear = e.target.value.slice(3)

    //if starts with '0' like '01 or 02...'  so we remove '0' for next validation
    if (inputtedMonth.startsWith('0')) inputtedMonth = inputtedMonth.slice(1)

    if (inputtedYear < currentYear || (inputtedYear === currentYear && inputtedMonth < currentMonth)) {
      document.querySelector('.parentOfCvcAndDate').append(inputDateError)
    }

  })
  expirationInput.addEventListener('input', (e) => {
    inputDateError.remove()
  })

  Inputmask('9999-9999-9999-9999[-99][-99]').mask(numberField);
  Inputmask({alias: "datetime", inputFormat: "mm/yy", placeholder: "MM/YY"}).mask(expirationInput);
  Inputmask('999').mask(cvcInput);

  // Append form elements to the container
  setChildren(form,
    el('h2', 'Online Payment Form'),
    cardNumberInput,
    el('div.mb-3.parentOfCvcAndDate', expirationInput, cvcInput,),
    // emailInput,
    submitButton
  )


  // Attach form submission event listener
  form.addEventListener('submit', (e) => {
    e.preventDefault()

    console.log(numberField.value)
    isNumberValid(numberField.value)
  });

  return form
}

