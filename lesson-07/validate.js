function validateUsername() {
  // return Math.random() > 0.5 ? '未填写' : true
  return true
}

function validatePassword() {
  // return '未填写'
  return true
}

function validateEmail() {
  // return '未填写'
  return true
}

function validateGender() {
  var elements = document.querySelectorAll('input[name=gender]')
  for(var i=0; i< elements.length; i++ ){
    var element = elements[i]
    if (element.checked) {
      return true
    }
  }
  return '请填写性别'
}

function validateForm() {
  var names = [
    'username', 'password', 'email', 'gender'
  ]
  var status = []

  status[0] = validateUsername()
  status[1] = validatePassword()
  status[2] = validateEmail()
  status[3] = validateGender()
  console.log(status)
  var success = true
  for(var i=0; i < status.length; i++) {
    var current
    var name = names[i]
    var div = document.getElementById(name + '-container')
    var span = div.querySelector('.tips')

    if (status[i] === true) {
      current = true
      div.classList.remove('has-error')
      span.innerText = ''
    } else {
      current = false
      div.classList.add('has-error')
      span.innerText = status[i]
    }
    success = current && success
  }

  return false

  // {
  //   username: true,
  //   password: true,
  //   email: true,
  //   gender: true,
  // }

  // {
  //   username: '未填写',
  //   password: true,
  //   email: true,
  //   gender: true,
  // }
}

