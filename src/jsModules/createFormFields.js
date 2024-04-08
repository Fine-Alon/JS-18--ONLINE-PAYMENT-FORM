import { el } from 'redom';

export const cardNumberInput = el('div.mb-3.parentOfCardNum',
  el('div.cardNumAndTypeBox.d-flex', el('input.w-75', {
    type: 'text',
    placeholder: 'Card Number',
    required: true,
  }), el('div.card-type.w-25.ps-3')));

export const expirationInput = el('input.w-25.me-3', {
  type: 'text',
  placeholder: 'MM/YY',
  required: true,
});

export const cvcInput = el('input.w-25', {
  type: 'text',
  placeholder: 'CVC/CVV',
  required: true,
});

export const emailInput = el('div.mb-3.parentOfEmail', el('input', {
  type: 'email',
  placeholder: 'Email',
  required: true,
}));

const createFormFields = () => {
  return el('div', [
    cardNumberInput,
    el('div.mb-3.parentOfCvcAndDate', expirationInput, cvcInput),
    emailInput,
  ]);
};
export default createFormFields;
