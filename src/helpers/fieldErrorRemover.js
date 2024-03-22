import {touchedInputs} from "../jsModules/paymentForm.js";

export function fieldErrorRemover(fieldType, errorElement) {

  fieldType.addEventListener('input', () => {
    // check if element was touched and if not, so push this input.placeholder(as special flag) to array of touches
    if (!touchedInputs[fieldType.placeholder]) {
      touchedInputs[fieldType.placeholder] = 'touched'
    }
    // console.log(touchedInputs)
    errorElement.remove()
  })
}
