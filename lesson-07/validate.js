function validateUsername() {
  // 用户名规则：包含中文，数字，英文，下划线，长度4-20
  var regx = /^[\u4E00-\u9FA5A-Za-z0-9_]{4,20}$/
  // your code is here
  return true
}

function validatePassword() {
  // 密码必须包含数字、大小写英文、!@#三个中任何一个符号，长度8-24个字符
  // 比如 '123aaaAA' 不符合，'123aaaA!' 符合
  var regx = /^(?=.*[\!\@\#])(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,24}$/
  // your code is here
  return true
}

function validateEmail() {
  var input = document.querySelector('input[name=email]')
  var value = input.value
  if (!value.trim()) {
    return '请填写email'
  }
  var regx = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  if (!value.trim().match(regx)) {
    return '请填写正确的email格式'
  }

  return true
}

function validateGender() {
  var element = document.querySelector('input[name=gender]:checked')
  if (!!element) {
    return true
  }
  return '请填写性别'
}

function validateForm() {
  var fieldNames = [
    'username', 'password', 'email', 'gender'
  ]
  var validateResults = []
  validateResults[0] = validateUsername()
  validateResults[1] = validatePassword()
  validateResults[2] = validateEmail()
  validateResults[3] = validateGender()

  var flag = true
  for (var i=0; i<validateResults.length; i++) {
    var success = validateResults[i] === true
    var fieldName = fieldNames[i]
    var div = document.getElementById(fieldName + '-container')
    var span = div.querySelector('.tips')
    if (!success) {
      span.innerText = validateResults[i]
      div.classList.add('has-error')
    } else {
      span.innerText = ''
      div.classList.remove('has-error')
    }
    flag = flag && success
  }

  // return flag
  return false
}

