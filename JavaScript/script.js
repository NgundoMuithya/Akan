var months = ["placeholder", "january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
var maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
var femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
var birthYear = prompt("Enter the year you were born in: ")
var century = parseInt(birthYear.slice(0, 2))
var year = parseInt(birthYear.slice(2, 4))
var birthMonth = prompt("Enter the month you were born in: ")
var month = months.indexOf(birthMonth.toLowerCase())
var birthDay = prompt("On which day of that month were you born e.g. If born on the 14th enter '14': ")
var day = parseInt(birthDay)
var gender = confirm("Are you male? (Hit OK if 'yes' and Cancel if 'no'): ")

