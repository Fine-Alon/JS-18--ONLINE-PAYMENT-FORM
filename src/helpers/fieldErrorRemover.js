// eslint-disable-next-line import/extensions,import/no-cycle
import { touchedInputs } from '../jsModules/paymentForm.js';

function fieldErrorRemover(fieldType, errorElement) {
  fieldType.addEventListener('input', () => {
    // check if element was touched and if not, so push this
    // 'input.placeholder' (as special flag) to array of touches
    if (!touchedInputs[fieldType.placeholder]) {
      touchedInputs[fieldType.placeholder] = 'touched';
    }

    errorElement.remove();
  });
}
export default fieldErrorRemover;
