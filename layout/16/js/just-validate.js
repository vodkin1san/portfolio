let valedation = new JustValidate('#form')

let selector = document.querySelector("#phone")
let im = new Inputmask("+7(999)999-99-99")
im.mask(selector)

valedation.addField("#name", [
  {
    rule: 'required',
    errorMessage : 'Вы не ввели имя'
  },
  {
    rule: 'minLength',
    value: 2,
    errorMessage : 'Минимум 2 символа'
  }
])
.addField("#email", [
  {
    rule: 'required',
    errorMessage : 'Вы не ввели e-mail'
  }
])
.addField("#phone", [
  {
    rule: 'required',
    errorMessage : 'Вы не ввели телефон'
  }
])
