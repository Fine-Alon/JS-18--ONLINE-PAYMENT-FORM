import {el, setChildren} from "redom";

alert('sfdsfsdf')

const hello = el("h1", "Hello RE:DOM!");


const PaymentForm = () => {

  let el = el('form', {class: 'payment-form'})
  let cardNumberInput = el('input', {type: 'text', placeholder: 'Card Number', required: true})
  let expletryInput = el('input', {type: 'text', placeholder: 'MM/YY', required: true})
  let cvcInput = el('input', {type: 'text', placeholder: 'CVC/CVV', required: true})
  let emailInput = el('input', {type: 'email', placeholder: 'Email', required: true})
  let submitButton = el('button', {type: 'submit'}, 'Pay')

  // Append form elements to the container
  setChildren(this.el,
    el('h2', 'Online Payment Form'),
    cardNumberInput,
    expiryInput,
    cvcInput,
    emailInput,
    submitButton
  );

  // Attach form submission event listener
  el.addEventListener('submit', () => {
  });
}

setChildren(document.body, hello, PaymentForm());
