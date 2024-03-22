export function fieldErrorCheckerOnBlur(fieldType, errorElement, listenerFnc) {
  fieldType.addEventListener('blur', event => {
    listenerFnc(event.target.value, errorElement)
  })
}
