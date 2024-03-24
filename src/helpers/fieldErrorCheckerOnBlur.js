// eslint-disable-next-line import/named,import/no-cycle
import { isFieldsValid } from './isFieldsValid';

export default function fieldErrorCheckerOnBlur(fieldType, errorElement, listenerFnc) {
  fieldType.addEventListener('blur', (event) => {
    listenerFnc(event.target.value, errorElement);
    isFieldsValid();
  });
}
