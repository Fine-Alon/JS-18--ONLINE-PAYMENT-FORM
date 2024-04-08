import { el, setChildren } from 'redom';
import Inputmask from 'inputmask';
import valid from 'card-validator';
import { cardValidator } from './cardValidator.js';
import { cvcInputListener, emailInputListener, expirationInputListener } from './eventListeners.js';
import { fieldErrorCheckerOnBlur } from '../helpers/fieldErrorCheckerOnBlur.js';
import { fieldErrorRemover } from '../helpers/fieldErrorRemover.js';
import filterImgForCardType from '../helpers/filterImgForCardType.js';
import createFormFields from './createFormFields';

export const touchedInputs = {};
export const PaymentForm = () => {
  const form = el('form.p-3.w-50', { class: 'payment-form' });
  const cardNumberInput = el('div.mb-3.parentOfCardNum',
    el('div.cardNumAndTypeBox.d-flex', el('input.w-75', {
      type: 'text',
      placeholder: 'Card Number',
      required: true,
    }), el('div.card-type.w-25.ps-3')));
  const expirationInput = el('input.w-25.me-3', {
    type: 'text',
    placeholder: 'MM/YY',
    required: true,
  });
  const cvcInput = el('input.w-25', {
    type: 'text',
    placeholder: 'CVC/CVV',
    required: true,
  });
  const emailInput = el('div.mb-3.parentOfEmail', el('input', {
    type: 'email',
    placeholder: 'Email',
    required: true,
  }));
  const submitButtonBox = el('div.mb-3', el('button.btn.btn-secondary.w-25', {
    type: 'submit',
    disabled: true,
  }, 'Pay'));
  const numberField = cardNumberInput.querySelector('input');
  const emailField = emailInput.querySelector('input');
  const cardTypeDiv = cardNumberInput.querySelector('.card-type');

  const inputDateError = el('p.text-danger.inputError', 'Error: Year or month is before current date');
  const inputCvcError = el('p.text-danger.inputError', 'Error: must be 3 numbers');
  const inputEmailError = el('p.text-danger.inputError', 'Error: E-mail is not correct');
  const inputCardError = el('p.text-danger.inputError', 'Error: Card number is not correct');

  numberField.addEventListener('input', (e) => {
    let imgData = null;
    const isValid = valid.number(e.target.value.toString());
    if (isValid.card) {
      // check what kind of card we get and so equal it to appropriate img
      imgData = filterImgForCardType(isValid.card.type);
      if (imgData.src) {
        const cardTypeImg = el('img', {
          src: imgData.src,
          alt: imgData.alt,
          // width: 55,
          style: {
            maxWidth: '55px', // Set max-width to 30 pixels
            maxHeight: '30px', // Set max-width to 30 pixels
          },
        });
        cardTypeDiv.append(cardTypeImg);
      }
    } else {
      cardTypeDiv.textContent = '';
    }
  });

  fieldErrorCheckerOnBlur(expirationInput, inputDateError, expirationInputListener);
  fieldErrorCheckerOnBlur(cvcInput, inputCvcError, cvcInputListener);
  fieldErrorCheckerOnBlur(emailField, inputEmailError, emailInputListener);
  fieldErrorCheckerOnBlur(numberField, inputCardError, cardValidator);

  fieldErrorRemover(expirationInput, inputDateError);
  fieldErrorRemover(cvcInput, inputCvcError);
  fieldErrorRemover(emailField, inputEmailError);
  fieldErrorRemover(numberField, inputCardError);

  Inputmask('9999-9999-9999-9999[-99][-99]')
    .mask(numberField);
  Inputmask({
    alias: 'datetime',
    inputFormat: 'mm/yy',
    placeholder: 'MM/YY',
  })
    .mask(expirationInput);
  Inputmask('999[9]')
    .mask(cvcInput);

  // Append form elements to the container
  setChildren(form, [
    el('h2', 'Online Payment Form'),
    createFormFields(),
    submitButtonBox]);

  // Attach form submission event listener
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('data is ready to be sent');
  });

  return form;
};
