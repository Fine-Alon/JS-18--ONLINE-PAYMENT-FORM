import {el, setChildren} from "redom";
import {isNumberValid} from "./cardValidator.js";
import Inputmask from "inputmask"
import {cvcInputListener, emailInputListener, expirationInputListener} from "../helpers/eventListeners.js";

export const PaymentForm = () => {
  const form = el('form.p-3.w-50', {class: 'payment-form'})
  const cardNumberInput = el('div.mb-3', el('input.w-75', {type: 'text', placeholder: 'Card Number', required: true}))
  const expirationInput = el('input.w-25.me-3', {type: 'text', placeholder: 'MM/YY', required: true})
  const cvcInput = el('input.w-25', {type: 'text', placeholder: 'CVC/CVV', required: true})
  const emailInput = el('div.mb-3.parentOfEmail', el('input', {type: 'email', placeholder: 'Email', required: true}))
  const submitButton = el('div.mb-3', el('button.btn.btn-secondary.w-25', {type: 'submit'}, 'Pay'))
  const numberField = cardNumberInput.querySelector('input');
  const emailField = emailInput.querySelector('input');

  const inputDateError = el('p.text-danger.inputError', 'Error: Year or month is before current date')
  const inputCvcError = el('p.text-danger.inputError', 'Error: must be 3 numbers')
  const inputEmailError = el('p.text-danger.inputError', 'Error: E-mail is not correct')
  const inputCardError = el('p.text-danger.inputError', 'Error: Card number is not correct')

  expirationInput.addEventListener('blur', e => {
    expirationInputListener(e.target.value, inputDateError)
  })
  cvcInput.addEventListener('blur', e => {
    cvcInputListener(e.target.value, inputCvcError)
  })
  emailField.addEventListener('blur', e => {
    emailInputListener(e.target.value, inputEmailError)
  })

  expirationInput.addEventListener('input', () => {
    inputDateError.remove()
  })
  cvcInput.addEventListener('input', () => {
    inputCvcError.remove()
  })
  emailField.addEventListener('input', () => {
    inputEmailError.remove()
  })

  Inputmask('9999-9999-9999-9999[-99][-99]').mask(numberField);
  Inputmask({alias: "datetime", inputFormat: "mm/yy", placeholder: "MM/YY"}).mask(expirationInput);
  Inputmask('999').mask(cvcInput);

  // Append form elements to the container
  setChildren(form,
    el('h2', 'Online Payment Form'),
    cardNumberInput,
    el('div.mb-3.parentOfCvcAndDate', expirationInput, cvcInput,),
    emailInput,
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

