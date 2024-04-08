import { el } from 'redom';

 const createFormFields = () => {
  const fields = el('div', [
    cardNumberInput,
    el('div.mb-3.parentOfCvcAndDate', expirationInput, cvcInput),
    emailInput,
  ]);
  return fields;
};
export default createFormFields
