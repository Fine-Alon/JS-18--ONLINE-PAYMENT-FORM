// eslint-disable-next-line import/no-cycle,import/extensions
import { touchedInputs } from '../jsModules/paymentForm.js';

export default function isFieldsValid() {
  const submitButton = document.querySelector('button');
  const formErrors = document.querySelectorAll('.inputError');

  // check if all inputs were touched and if no errors present BTN will be enable
  // Important!!! if field was once touched so we will see an error there so this condition 100%!
  if (Object.keys(touchedInputs).length >= 4 && formErrors.length === 0) {
    submitButton.disabled = formErrors.length > 0;
  }
}
