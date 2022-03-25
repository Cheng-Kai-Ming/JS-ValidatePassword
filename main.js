document.addEventListener("DOMContentLoaded", () => {
  const psw = document.getElementById("psw")
  const cpsw = document.getElementById("cpsw")
  const screen = document.getElementById("screen")
  const pswform = document.getElementById("pswform")
  const sub_btn = document.getElementById("sub_btn")

  let password = ""
  let confirm_password = ""
  let check_array = []

  function validate_uppercase(password) { return /[A-Z]/.test(password) }

  function validate_lowercase(password) { return /[a-z]/.test(password) }

  function validate_digit(password) { return /\d/.test(password) }

  function validate_length(password) {
    return password.length >= 6
  }

  function psw_state() {
    return psw.value.length == 0
  }

  function cpsw_state() {
    return cpsw.value.length == 0
  }

  function validate(password) {
    screen.innerHTML = ""
    check_array = []
    if (!validate_length(password)) {
      screen.innerHTML += `<li>The passwords must be at least 6 characters long</li>`
      check_array.push(false)
    }
    if (!validate_digit(password)) {
      screen.innerHTML += `<li>The passwords must contain at least 1 digit</li>`
      check_array.push(false)
    }
    if (!validate_lowercase(password)) {
      screen.innerHTML += `<li>The passwords must contain at least 1 lowercase</li>`
      check_array.push(false)
    }
    if (!validate_uppercase(password)) {
      screen.innerHTML += `<li>The passwords must contain at least 1 uppercase</li>`
      check_array.push(false)
    }
  }



  psw.addEventListener('focusout', (e) => {
    password = e.target.value
    validate(password)
  })

  cpsw.addEventListener('focusout', (e) => {
    confirm_password = e.target.value
    if (password != confirm_password) {
      alert("Passwords did not match");
      check_array.push(false)
    }
  })


  sub_btn.addEventListener('click', () => {
    if (
      check_array.includes(false) || psw_state() || cpsw_state()
    ) {
      alert("Can't submit!!")
    } else {
      pswform.submit()
    }
  })

}
)
