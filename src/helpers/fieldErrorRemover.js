export function fieldErrorRemover(fieldType, errorElement) {
  fieldType.addEventListener('input', () => {
    errorElement.remove()
  })
}
