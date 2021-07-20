var months = ["placeholder", "january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
var maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
var femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
var consent = confirm("Do you wish to know your Akan name? (OK if 'yes' Cancel if 'no'): ")
while (consent === true) {
    var birthYear = prompt("Enter the year you were born in e.g. '2021': ")
    var century = parseInt(birthYear.slice(0, 2))
    var year = parseInt(birthYear.slice(2, 4))
    var birthMonth = prompt("Enter the name of the month you were born in e.g. 'January': ")
    var month = months.indexOf(birthMonth.toLowerCase())
    var birthDay = prompt("On which day of that month were you born (e.g. If born on the 14th enter '14'): ")
    var day = parseInt(birthDay)
    if (day <= 0 || day >= 32) {
    alert("Invalid day of month entered! The day of the month cannot be 0 or less than 0 and cannot be 32 or greater than 32.")
    }
    else {
        var gender = confirm("Are you male? (Hit OK if 'yes' and Cancel if 'no'): ")
        var indexofAkanName = parseInt(((((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + day) % 7).toString().slice(0, 1))
        if (gender) {
        var akanName = maleAkanNames[indexofAkanName]
        alert("Your Akan name is " + akanName + ".")
        }
        else {
        var akanName = femaleAkanNames[indexofAkanName]
        alert("Your Akan name is " + akanName + ".")
        }
    }
    var consent = confirm("Do you wish to try again? (OK if 'yes' Cancel if 'no'): ")
}
alert("Have a nice day!")

