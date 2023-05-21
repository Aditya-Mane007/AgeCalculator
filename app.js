console.log("Hello World")

const day = document.querySelector(".day")
const month = document.querySelector(".month")
const year = document.querySelector(".year")
const submit = document.querySelector(".submit-btn")



submit.addEventListener('click',() => {
  // Days
  // Checking for if date is over 31
  if (day.value > 31) {
    day.parentElement.childNodes[1].style.color = "hsl(0, 100%, 67%)"
    const error_msg = day.parentElement.childNodes[5]
    error_msg.innerText = "Must be valid value"
    error_msg.style.color = "red"
  } else if (!day.value) {
    // Check for if date is !empty
    day.parentElement.childNodes[1].style.color = "red"
    const error_msg = day.parentElement.childNodes[5]
    error_msg.innerText = "This field is required"
    error_msg.style.color = "red"
  } else {
    // Everything is correct 
    day.parentElement.childNodes[1].style.color = "hsl(0, 1%, 44%)"
    const error_msg = day.parentElement.childNodes[5]
    error_msg.innerText = ""

    const days = document.querySelector(".day-output")
    days.childNodes[0].innerText = calculateDate(new Date().getDate(),day.value)
  }

  // MONTHS
  // Checking for if month is over 12
  if (month.value > 13) {
    month.parentElement.childNodes[1].style.color = "red"
    const error_msg = month.parentElement.childNodes[5]
    error_msg.innerText = "Must be valid value"
    error_msg.style.color = "red"
  } else if (!month.value) {
    // checking for if month value is !empty
    month.parentElement.childNodes[1].style.color = "red"
    const error_msg = month.parentElement.childNodes[5]
    error_msg.innerText = "This field is required"
    error_msg.style.color = "red"
  } else {
    // Everything is correct
    month.parentElement.childNodes[1].style.color = "hsl(0, 1%, 44%)"
    const error_msg = month.parentElement.childNodes[5]
    error_msg.innerText = ""

    const months = document.querySelector(".month-output")
    months.childNodes[1].innerText = calculateMonth(new Date().getMonth(),month.value)
  }

  // Years
  // Checking for if year value is !empty
  if (!year.value) {
    year.parentElement.childNodes[1].style.color = "red"
    const error_msg = year.parentElement.childNodes[5]
    error_msg.innerText = "This field is required"
    error_msg.style.color = "red"
  } else if (year.value > new Date().getFullYear()) {
    // Checking for no future year value
    year.parentElement.childNodes[1].style.color = "red"
    const error_msg = year.parentElement.childNodes[5]
    error_msg.innerText = "No future years"
    error_msg.style.color = "red"
  }
  else {
    // Everything is correct
    year.parentElement.childNodes[1].style.color = "hsl(0, 1%, 44%)"
    const error_msg = year.parentElement.childNodes[5]
    error_msg.innerText = ""
    const years = document.querySelector(".year-output")
    years.childNodes[0].innerText = calculateYear(new Date().getFullYear(),year.value)
  }
})

let finalYear
const calculateDate = (currentDate,birthDate) => {
  let finalDate
  if (currentDate < birthDate) {
    const res = Math.abs(currentDate - birthDate)
    finalDate = 30 - res
    finalYear++
  } else {
    finalDate = currentDate - birthDate
  }

  return finalDate
}

const calculateMonth = (currentMonth,birthMonth) => {
  let finalMonth

  finalMonth = currentMonth - birthMonth
  if (finalMonth == 0) {
    const res = 12 + 1
    finalMonth = res
    finalYear++
  }
  if (currentMonth < birthMonth) {
    const res = Math.abs(currentMonth - birthMonth)
    finalMonth = 12 - res
    finalYear++
  }

  return finalMonth

}

const calculateYear = (currentYear,birthYear) => {

  res = currentYear - birthYear
  if (finalYear > 1) {
    finalYear = res - 1
  } else {
    finalYear = res
  }
  return finalYear
}
