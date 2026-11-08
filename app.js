
//  HOME PRACTICE     ,   Class 12 & 13 Code (From Below),(Starting Here)  Line No 192 





// for( var i= 1 ; i < 10 ;i++){
//     console.log("mashallah" +i)

// // }

// print counting 1 to 30

// for ( var i = 1 ; i<=30; i++){
//     console.log(i)

// }




// print counting reverse 30 to 1



// for (var i=30; i>=1; i--){
// console.log(i)
// }



// //Table 2

// for (var i=1; i<=10;i++){

//   document.write("<h1>2x "+i+ " = "+2 * i + "<h1>");
  

// }

// table practice

// for (var i=1 ; i<=10; i++){
//     document.write("<h1>2 x" +i+ "="  +2* i +"</h1>")

// }



//Loop ka asal use case


// var cities =['karachi','multan','lahore',"islamabad"];

// for ( var i=0 ; i <= 3; i++){
//     console.log(cities[i])



// loop ka asal use case practice


// var cities = ['karachi', 'multan','punjab','khyberpakhtunkhwa']


// for ( var i=0 ; i < cities.length; i++){
//     console.log(cities[i]);


// /odd number

// for (var i=1; i<=10; i=i+2){
//     console.log(i)

// }


//even number


// for (var i=0 ; i<=10 ; i=i+2){
//     console.log(i)

// }



//flag concept

// var arr = ["ali", "bilal", "sufiyan", "jaffar", "buraq"];

// var userName = prompt("Enter your name!");

// var isMatch = false;

// for (var i = 0; i < arr.length; i++) {
// //   jaffar  === jaffar
//   if (arr[i] === userName) {
//     isMatch = true;
//     alert("Welcome!");
//     break;
//   }
// }

// console.log("isMatch", isMatch);

// if (isMatch == false) {
//   alert("Not found!");
// }



// flag concept practice 1//



// var arr =["hamza","jawed","junaid","hammad","haseeb"];

// var userName = prompt("Enter Your Name!");


// var isMatch =false;

// for ( i=0; i < arr.length; i++){
//     if(arr[i] ===userName){
//         isMatch =true;
//         alert("Welcome "+ userName);
//         break
//     }

// }
// console.log("ismatch",isMatch);

// if (isMatch==false){
//     alert("Not Found!")
// }


//flag concept practice 2

// var arr =["wahid","khalid","muzammil","anus"];

// var userName =prompt("Enter Your Name!");

// var isMatch=false;

// for(var i=0; i< arr.length;i++){
//     if(arr[i]===userName){
//         isMatch=true
//         alert("Welcome "+ userName);
//         break

//     }

// }

// console.log("ismatch", isMatch);

// if(isMatch==false){
// alert("Not Found!")
// }


//flag concept practice 3

// var arr =["sherdad","shermohammad","wazirdad"];

// var userName =prompt("Enter Your Name!");

// var isMatch=false

// for (var i=0; i< arr.length;i++){
//     if(arr[i]===userName){
//         isMatch=true;
//         alert("Welcome "+ userName);
//         break

//     }

// }

// console.log("ismatch",isMatch);
// if(isMatch=false){
//     alert("Not Found!");

// }






// CLASS PRACTICE 12





// Email Password Match Practice 1

// var email = "jawedkhan2d7@gmail.com";
// var password = "123";

// var userEmail =prompt("Enter your email");
// var userPassword =prompt("Enter your password");

// if (userEmail===email && userPassword===password){
//     document.write("<h1> USER LOGIN !  </h1>");
// } else {
//     alert("Email or Password Not Match!")

// }

// Email Password Match Practice 2  

// var email ="jawedkhan2d7@gmail.com";
// var password ="123";

// var userEmail = prompt("Enter your email");
// var userPassword = prompt("Enter a password");

// if(userEmail===email && userPassword===password){
//       document.write("<h1> USER LOGIN !</h1>");
// }
// else{
//     alert("email or password not match try again");
// }

// to lowercase()  method  practice 1

// var userName = prompt("Enter your name");
// console.log("userName", userName);

// if (userName.toLowerCase()==="jaffar"){
//     console.log("Allow");
// } else {
//     console.log("not allow");
// }


//to uppercase() method practice 1

// var userName = prompt("Enter your name");
// console.log("username",userName);
// if (userName.toUpperCase()==="JAFFAR"){
//     console.log("allow");

// } else{
//     console.log("not allow")
// }


//  var userCity = prompt("Enter your city!");
// var cities = ["KARACHI", "lahore", "ISLAMABAD", "multan"];

// var isMatch = false;

// for (var i = 0; i < cities.length; i++) {
//   console.log(cities[i]);
//   if (userCity.toUpperCase() === cities[i].toUpperCase()) {
//     alert("WELCOME to " + cities[i]);
//     isMatch = true;
//   }
// }

// if (isMatch === false) {
//   alert("CITY NOT FOUND");
// }




// var userCity =prompt("Enter your city!");
// var cities = ["karachi","lahore","MULTAN","PESHAWAR"];
// var isMatch=false;

// for(var i =0; i < cities.length; i++){
//     console.log(cities[i]);
// if(userCity.toUpperCase()===cities[i].toUpperCase()){
//     alert("welcome to " + cities[i]);
//        isMatch=true

//    }
//    }
// if(isMatch===false){
//     alert("city not found");

// }

// var str = "Jaffar Aman";
// console.log(str[5])
// console.log(str.length)


// var str ="saylani";
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());


//CAPITALIEZED SHORT TARIQA PRACTICE 1 


// var str ="jaFFar aMan";
// var capWord =str[0].toUpperCase() + str.slice(1).toLowerCase()
// console.log("capword :",capWord);

 
//SPLIT METHOD PRACTICE

// var str = "my name is jaffar aman";
// var arr = str.split(" ")
// console.log(arr);


// var htmlDef =
//   "Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.";
// console.log(htmlDef)

// var arr =htmlDef.split(" ")
// console.log(arr)


// join  method practice

// var arr = ["Hello", "Jawed", "Khan"];

// var aksath = arr.join(" ");

// console.log(aksath);



// indexoff method practice

//  var str = "Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It defines the browser content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript."

// console.log(str);
// console.log(str.indexOf("is"))
// console.log(str.lastIndexOf("is"))

// var name = "jawed"
// console.log(name.indexOf("w"))


// var str = "jawed";
// console.log(str.indexOf("w")); //apsy value lehga or apko index dehga
// console.log(str[1]);

//replce method practice

// var str = "Hypertext Markup Language is the standard markup language for documents designed to language be displayed in a web browser. It defines the browser content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript."

// str = str.replaceAll("web","webpage")

// console.log(str)


// var str = "HMypertext Markup Language is the standard markup language for HMypertext documents designed to  HMypertext  be displayed in a web browser. HMypertext It defines the content and structure of web content. It is often assisted by technologies such as standard Cascading Style Sheets and scripting languags such as JavaScript";

// // console.log(str);







// CLASS PRACTICE     13






// //replace Practice

// // var newStr = str.replace("HMypertext","HYPERTEXT");
// // var newStr =str.replaceAll("HMypertext","HYPERTEXT");
// // console.log(newStr)

// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.length)




// var indexNumber = str.indexOf("e");
// var indexNumber = str.lastIndexOf("e");
// console.log(indexNumber);

// method Math.roundoff practice

// var num = 45.6;
// var roundOff = Math.round(num);
// console.log("roundOff", roundOff);


// var per = 98.9;
// var roundOff = Math.round(per);
// console.log(per);
// document.write("<h1>"+ roundOff +"</h1>")



// method Math.floor practice

// var num = 2.5;
// var floorValue = Math.floor(num);
// console.log("floorValue", floorValue)



// method Math.ceil practice

// var num = 4.6;
// var ceilValue = Math.ceil(num);
// console.log(  "ceilValue",ceilValue)


// method random number generate  practice

// 0.0232032303  to   0.9999992999

// var randomNumber = Math.random();
// console.log(randomNumber)


// 1 to 10

// var randomNumber = Math.floor(Math.random()* 10 + 1);
// var randomNumber = Math.floor(Math.random()* 20 + 1);
// console.log(randomNumber)



// Formula random number generator 

//  Math.floor(Math.random() * (max - min + 1)) + min;
// 50 to 100  practice
 
// var randomNumber = Math.floor(Math.random()* (101 -90)) +90;
// console.log("randomNumber", randomNumber)

// var  userNumber = +prompt("Enter a number");
// var randomNumber = Math.floor(Math.random() * 10 ) + 1;
// console.log(randomNumber);


// if(userNumber === randomNumber){
//     console.log("randon number " ,"Match" )

// }else{
//     console.log("randomnumber:","not match")
// }

// type conversion practice
//1. string convert into number 2 way   1) +  2) Number()


// var value1 = Number("20");
// var value2 = +"10";  //  SHORT
// console.log(typeof value2)

// var str ="9.9"

//  var num = parseInt(str); //  type bhi change karta hai or float ki tarah hi sirf integer number deta hai
//  console.log(typeof num)
//  console.log(num)





//2 . Number convert in to string 2 way   1)String()  2)  .toString

 // String()
// .toString

// var num = 434343;
// var string1 = String(num);
// var string2 =num.toString();
// console.log(typeof string2)


// Number or  parseFloat ka ak hi kam hai

// var num1 = "1.9999999";
// console.log(Number(num1))
// console.log(parseFloat(num1));



// var value = 20.32323232; 
// console.log(typeof +value.toFixed(2));    // .toFixed method matlab point ke bad number ko fixed karna   Prctice 
