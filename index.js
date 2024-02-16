//Q1.
// var num = parseFloat(prompt("Enter any positive number: "))
// if (num < 0){
//     alert("Enter a positive number")
// }
// else{
// document.write("number:" + num + "<br>")
// var round = Math.round(num)
// document.write("round off value:" + round + "<br>")
// var floor = Math.floor(num)
// document.write("floor value:" + floor+ "<br>")
// var ceil = Math.ceil(num)
// document.write("ceil value:" + ceil + "<br>")
// }

// Q2.

// var num = parseFloat(prompt("Enter any Negative  number: "))
// if (num > 0){
//     alert("Enter a negative number")
// }
// else{
// document.write("number:" + num + "<br>")
// var round = Math.round(num)
// document.write("round off value:" + round + "<br>")
// var floor = Math.floor(num)
// document.write("floor value:" + floor+ "<br>")
// var ceil = Math.ceil(num)
// document.write("ceil value:" + ceil + "<br>")
// }

//Q3.

// var num = parseFloat(prompt("Enter a positve decimal number"))

// if (num < 0){
//     alert("Enter a positive number: ")
// }
// else{
// document.write("number:" + num + "<br>")
// var round = Math.round(num)
// document.write("round off value:" + round + "<br>")
// var floor = Math.floor(num)
// document.write("floor value:" + floor+ "<br>")
// var ceil = Math.ceil(num)
// document.write("ceil value:" + ceil + "<br>")
// }

//Q4.

// var num = parseFloat(prompt("Enter a negative decimal number"))

// if (num > 0){
//     alert("Enter a negative number: ")
// }
// else{
// document.write("number:" + num + "<br>")
// var round = Math.round(num)
// document.write("round off value:" + round + "<br>")
// var floor = Math.floor(num)
// document.write("floor value:" + floor+ "<br>")
// var ceil = Math.ceil(num)
// document.write("ceil value:" + ceil + "<br>")
// }


//Q5.

// var num = parseFloat(prompt("Enter a number: "))

// if (num == ""){
//     alert("Enter a number")
// }
// else{
//     var absolute = Math.abs(num)
//     document.write("The absolute value of" + " " + num + " "+"is"+ " " +absolute )
// }

//Q6.
// for (i=0; i<2; i++){
//     var num = Math.random()
//     var improvedNum = (num *6) + 1
//     var diceNum = Math.floor(improvedNum)

//     document.write("Random dice value: " +diceNum + "<br>")
// }

//Q7.

// for (var i = 0; i < 2; i++) {
//     var bignum = Math.random();
//     var tossNum = Math.round(bignum);
//     tossNum += 1;
    
//     if (tossNum == 1){
//         document.write(tossNum + "<br>")
//         document.write("Tails" + "<br>")
//     }
//     else if (tossNum ==2){
//         document.write(tossNum + "<br>")
//         document.write("Heads" + "<br>" )
//     }

// }

//Q8.

    // var bignum = Math.random()
    // var improvedNum = Math.round((bignum*100))
    // improvedNum+-100
    // document.write("Random number between 1 and 100: " +improvedNum)

//Q9.

// var userInput = prompt("Please enter your weight:");
// var match = userInput.match(pattern);
// if (match) {
//     var weight = parseFloat(match[1]);
//     document.write("Your weight is: " + weight + " kilograms");
// } else {

//     alert("Invalid input! Please enter your weight in a valid format (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms).");
// }



//Q10.

// var secretNum = 8

// var userNum = parseInt(prompt("Enter a number between 1 and 10: "))

// if (userNum>10){
//     alert("Number should be between 1 and 10")
// }
// else if (userNum == secretNum){
//     alert("Congrats!")
// }
// else{
//     alert("Try Again")
// }


//Q11.
// var date = new Date()

// document.write(date)

//Q12.
// var current = new Date()
// var month = current.getMonth()

// var monthArray = ["January", "Feburary", "March","April","May","June","July","August","September","October", "November", "December"]

// var currentMonth = monthArray[month]

// document.write("Current month: "+ currentMonth)

//Q13.

// var date = new Date()

// var day = date.getDay()

// var dayArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

// var currentDay = dayArray[day]

// document.write("Today is"+ " " + currentDay )


//Q14.

// var date = new Date()
// var day = date.getDay()
// var dayArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

// if (day == 0 | day==6){
//     document.write("It's Fun day")
// }
// else{
//     document.write("It's a busy day")
// }

//Q15.

// var date = new Date()
// var currentDate = date.getDate()

// if (currentDate<16){
//     document.write("First fifteen days of the month")
// }
// else{
//     document.write("Last days of the month")
// }

//Q16.
// var currentDate = new Date();
// document.write("Current Date: " + currentDate + "<br>")

// var millisecondsSince1970 = currentDate.getTime()
// document.write("Elapsed milliseconds since January1, 1970: " + millisecondsSince1970 + "<br>")

// var minutesSince1970 = millisecondsSince1970 / (1000 * 60);

// document.write("Minutes since midnight, Jan. 1, 1970:", minutesSince1970);

//Q17.
// var date = new Date()

// var hours = date.getHours()

// if (hours>=1 & hours<=12){
//     document.write("Its AM")
// }
// else{
//     document.write("Its PM")
// }

//Q18.
// var laterDate = new Date("2021-1-1");

// laterDate.setMonth(laterDate.getMonth() );
// laterDate.setDate(0);

// document.write("Last day of the last month of 2020:", laterDate);

//Q19.
// var ramadanStartDate = new Date("2015-06-18");

// var currentDate = new Date();

// var timeDifference = currentDate.getTime() - ramadanStartDate.getTime();

// var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

// document.write( daysPassed + "days have passed since 1st Ramadan.2015 ");

//Q20.
// var referenceDate = new Date("Sat Dec  05 2015 22:50:16 GMT +0500(PKT)")

// var currentDate = new Date()

// var timeDifference = currentDate.getTime() - referenceDate.getTime()

// var secondsPassed = Math.floor(timeDifference/(1000))

// document.write(secondsPassed + " "+ "seconds had passed since beginning of 2015")


//Q21.

// var currentDate = new Date()
// document.write("current date: " + currentDate + "<br>")
// var currentHour = currentDate.getHours()

// var hourAgo = currentHour-1

// currentDate.setHours(hourAgo)

// document.write("1 hour ago, it was" + currentDate)

//Q22.

// var currentDate = new Date()
// var currentYear = currentDate.getFullYear()

// var yearBack = currentYear - 100

// var year100Back = new Date()
// year100Back.setFullYear(yearBack)

// alert("Current Date: " + currentDate + "\n 100 Years Back, it was" + " " + year100Back)

//Q23.

// var userAge = parseInt(prompt("Please enter your age: "))

// var date = new Date()
// var currentYear = date.getFullYear()

// var birthYear = currentYear - userAge

// document.write("Your age is " + userAge + "<br>")
// document.write("Your birth year is  " + birthYear)

//Q24.

// var consumerName = prompt("Enter your name to print your bill: ");
// var date = new Date();
// var month = date.getMonth();
// var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var unitsUse = 450;
// var chargesperUnit = 14;
// var netamount = unitsUse * chargesperUnit;
// netamount = netamount.toFixed(2);
// var latefee = 500;
// var latebill = parseFloat(netamount) + latefee; 

// document.write("<h1>K-Electric Bill</h1>" + "<br>");
// document.write("Customer Name: " + consumerName + "<br>");
// document.write("Month: " + monthArray[month] + "<br>");
// document.write("Units Consumed: " + unitsUse + "<br>");
// document.write("Charges per Unit: " + chargesperUnit + "<br>");
// document.write("Net Amount Payable (before due date): Rs. " + netamount + "<br>");
// document.write("Late Fee: Rs. " + latefee + "<br>");
// document.write("Net Amount Payable (including late fee): Rs. " + latebill + "<br>");
