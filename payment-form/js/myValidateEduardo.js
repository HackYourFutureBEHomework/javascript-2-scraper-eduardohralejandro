
function onChangeEmailField(e) {
  console.log(e);

  //get the target field that was changed
  const $field = e.target;
  console.log($field);
  //get the value of the field
  const value = $field.value;
  console.log(value);

  // check if the email address is valid

  const isValid = value.includes('@');
  console.log({isValid});
  

  //  get the parent element

  const $parent = $field.parentElement;
  console.log($parent)
/// error variable
  let error = $parent.querySelector('.error');

  if (isValid) {
    $parent.classList.remove('invalid');
  } else {
    $parent.classList.add("invalid");
    error.innerHTML = "THIS IS NOT A VALID EMAIL ADDRESS";
  }
}
let emailField = document.querySelector('#email-field');

emailField.addEventListener("change", onChangeEmailField);

