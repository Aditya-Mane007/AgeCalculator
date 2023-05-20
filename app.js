console.log("Hello World")

const day = document.querySelector(".day")
const month = document.querySelector(".month")
const year = document.querySelector(".year")
const submit = document.querySelector(".submit-btn")



submit.addEventListener('click',() => {

  if (day.value > 31) {
    day.parentElement.childNodes[1].style.color = "hsl(0, 100%, 67%)"
    const error_msg = day.parentElement.childNodes[5]
    error_msg.innerText = "Must be valid value"
    error_msg.style.color = "red"
  } else if (!day.value) {
    day.parentElement.childNodes[1].style.color = "red"
    const error_msg = day.parentElement.childNodes[5]
    error_msg.innerText = "This field is required"
    error_msg.style.color = "red"
  } else {
    day.parentElement.childNodes[1].style.color = "hsl(0, 1%, 44%)"
    const error_msg = day.parentElement.childNodes[5]
    error_msg.innerText = ""

  }
  if (month.value > 13) {
    month.parentElement.childNodes[1].style.color = "red"
    const error_msg = month.parentElement.childNodes[5]
    error_msg.innerText = "Must be valid value"
    error_msg.style.color = "red"
  } else if (!month.value) {
    month.parentElement.childNodes[1].style.color = "red"
    const error_msg = month.parentElement.childNodes[5]
    error_msg.innerText = "This field is required"
    error_msg.style.color = "red"
  } else {
    month.parentElement.childNodes[1].style.color = "hsl(0, 1%, 44%)"
    const error_msg = month.parentElement.childNodes[5]
    error_msg.innerText = ""
  }

  if (!year.value) {
    year.parentElement.childNodes[1].style.color = "red"
    const error_msg = year.parentElement.childNodes[5]
    error_msg.innerText = "This field is required"
    error_msg.style.color = "red"
  } else {
    year.parentElement.childNodes[1].style.color = "hsl(0, 1%, 44%)"
    const error_msg = year.parentElement.childNodes[5]
    error_msg.innerText = ""
  }

  const years = document.querySelector(".year-output")
  years.childNodes[0].innerText = new Date().getFullYear() - year.value


  const months = document.querySelector(".month-output")
  const MonthValue = months.childNodes[1].innerText = new Date().getMonth() - month.value

  const days = document.querySelector(".day-output")

  const finalDate = Math.abs(new Date().getDate() - day.value)

  days.childNodes[0].innerText = 30 - finalDate
})
console.log(new Date().getUTCMonth())
